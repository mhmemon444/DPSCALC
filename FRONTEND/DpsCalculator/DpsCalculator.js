import React from 'react';
import ReactDOM from 'react-dom';

import PlayerInputs from './PlayerInputs/PlayerInputs';
import CombatAttributes from './CombatAttributes/CombatAttributes';
import MonsterAttributes from './MonsterAttributes/MonsterAttributes';
import Results from './Results/Results';

import * as attributes from './dpsattributes';


import './DpsCalculator.css';

const PRAYER_TURNOFF= {
    'Thick Skin': {DefenceBonus:1.05, DrainSpeed:3, vi:0, TurnsOff:['Rock Skin','Steel Skin','Chivalry','Piety','Rigour','Augury']},
    'Burst of Strength': {StrengthBonus:1.05, DrainSpeed:3, vi:0, TurnsOff:['Superhuman Strength','Ultimate Strength','Chivalry','Piety']},
    'Clarity of Thought': {AttackBonus:1.05, DrainSpeed:3, vi:0, TurnsOff:['Improved Reflexes','Incredible Reflexes','Chivalry','Piety']},
    'Sharp Eye': {RangedAttackBonus:1.05, RangedStrengthBonus:1.05, DrainSpeed:3, vi:0, TurnsOff:['Hawk Eye','Eagle Eye','Rigour']},
    'Mystic Will': {MagicBonus:1.05, DrainSpeed:3, vi:0, TurnsOff:['Mystic Lore','Mystic Might','Augury']},
    'Rock Skin': {DefenceBonus:1.1, DrainSpeed:6, vi:0, TurnsOff:['Thick Skin','Steel Skin','Chivalry','Piety','Rigour','Augury']},
    'Superhuman Strength': {StrengthBonus:1.1, DrainSpeed:6, vi:0, TurnsOff:['Burst of Strength','Ultimate Strength','Chivalry','Piety']},
    'Improved Reflexes': {AttackBonus:1.1, DrainSpeed:6, vi:0, TurnsOff:['Clarity of Thought','Incredible Reflexes','Chivalry','Piety']},
    'Rapid Restore': {DrainSpeed:1, vi:1, TurnsOff:[]},
    'Rapid Heal': {DrainSpeed:2, vi:1, TurnsOff:[]},
    'Protect Item': {DrainSpeed:2, vi:1, TurnsOff:[]},
    'Hawk Eye': {RangedAttackBonus:1.1, RangedStrengthBonus:1.1, DrainSpeed:6, vi:0, TurnsOff:['Sharp Eye','Eagle Eye','Rigour']},
    'Mystic Lore': {MagicBonus:1.1, DrainSpeed:6, vi:0, TurnsOff:['Mystic Will','Mystic Might','Augury']},
    'Steel Skin': {DefenceBonus:1.15, DrainSpeed:12, vi:0, TurnsOff:['Thick Skin','Rock Skin','Chivalry','Piety','Rigour','Augury']},
    'Ultimate Strength': {StrengthBonus:1.15, DrainSpeed:12, vi:0, TurnsOff:['Burst of Strength','Superhuman Strength','Chivalry','Piety']},
    'Incredible Reflexes': {AttackBonus:1.15, DrainSpeed:12, vi:0, TurnsOff:['Clarity of Thought','Improved Reflexes','Chivalry','Piety']},
    'Protect from Magic': {DrainSpeed:12, vi:1, TurnsOff:['Protect from Missiles','Protect from Melee','Retribution','Redemption','Smite']},
    'Protect from Missiles': {DrainSpeed:12, vi:1, TurnsOff:['Protect from Magic','Protect from Melee','Retribution','Redemption','Smite']},
    'Protect from Melee': {DrainSpeed:12, vi:1, TurnsOff:['Protect from Magic','Protect from Missiles','Retribution','Redemption','Smite']},
    'Eagle Eye': {RangedAttackBonus:1.15, RangedStrengthBonus:1.15, DrainSpeed:12, vi:2, TurnsOff:['Sharp Eye','Hawk Eye','Rigour']},
    'Mystic Might': {MagicBonus:1.15, DrainSpeed:12, vi:2, TurnsOff:['Mystic Will','Mystic Lore','Augury']},
    'Retribution': {DrainSpeed:3, vi:0, TurnsOff:['Protect from Magic','Protect from Missiles','Protect from Melee','Redemption','Smite']},
    'Redemption': {DrainSpeed:6, vi:0, TurnsOff:['Protect from Magic','Protect from Missiles','Protect from Melee','Retribution','Smite']},
    'Smite': {DrainSpeed:18, vi:0, TurnsOff:['Protect from Magic','Protect from Missiles','Protect from Melee','Retribution','Redemption']},
    'Preserve': {DrainSpeed:2, vi:1, TurnsOff:[]},
    'Chivalry': {AttackBonus:1.15, StrengthBonus:1.18, DefenceBonus:1.2, DrainSpeed:24, vi:0, TurnsOff:['Thick Skin','Burst of Strength','Clarity of Thought','Rock Skin','Superhuman Strength','Improved Reflexes','Steel Skin','Ultimate Strength','Incredible Reflexes','Piety','Rigour','Augury']},
    'Piety': {AttackBonus:1.2, StrengthBonus:1.23, DefenceBonus:1.25, DrainSpeed:24, vi:2, TurnsOff:['Thick Skin','Burst of Strength','Clarity of Thought','Rock Skin','Superhuman Strength','Improved Reflexes','Steel Skin','Ultimate Strength','Incredible Reflexes','Chivalry','Rigour','Augury']},
    'Rigour': {DefenceBonus:1.25, RangedAttackBonus:1.2, RangedStrengthBonus:1.23, DrainSpeed:24, vi:2, TurnsOff:['Thick Skin','Rock Skin','Steel Skin','Chivalry','Piety','Sharp Eye','Hawk Eye','Eagle Eye','Augury']},
    'Augury': {DefenceBonus:1.25, MagicBonus:1.25, DrainSpeed:24, vi:2, TurnsOff:['Thick Skin','Rock Skin','Steel Skin','Chivalry','Piety','Mystic Will','Mystic Lore','Mystic Might','Rigour']},
};

class DpsCalculator extends React.Component {
    state = {
        //Selected gear: (transferred to parent component (DpsCalculator) to send to loadout)
        equipment: {
            cape: null,
            head: null,
            neck: null,
            ammo: null,
            weapon: null,
            torso: null,
            shield: null,
            legs: null,
            gloves: null,
            boots: null,
            ring: null
        },

        //Selected Monster to send to loadout:
        monster: {
            cT: ["null"]
        },

        //Selected spell to send to loadout:
        spell: null,

        //check if wildy wep for dps code to send to loadout
        checkedwildy: false,

        //Chinchompa target distance to send to loadout
        chindistance: 3,

        //Selected prayers to send to loadout
        selectedPrayers: [

        ],

        //Player Stats:
        attackLevel: 99,
        strengthLevel: 99,
        defenceLevel: 99,
        hitpointsLevel: 99,
        rangedLevel: 99,
        mageLevel: 99,
        prayerLevel: 99,
        miningLevel: 99,
        visibleHitpoints: 99,

        //Stat Boosts:
        strSelectedBoost: {value: "None", label: "None", icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAeCAMAAAD0DqVnAAABTVBMVEUAAACzs7Wzs7OxsrOqqq25qFW2pVSxoVGvn1Cqmk18fHx7e3uKfj96ent5enp5eXp4eHmHez53d3h2dnd2dnZ1dXaEeDx0dHZzdHVzc3SCdjtycnRxcXNxcXJwcHJ/czlvb3Fub3FubnBtbW9sbW9sbG5ra21qam1qamxpaWxoaGt1azZnaGpmZmllZWhkZWhyZzRkZGdjY2diYmZvZTNhYmVgYWRfX2NsYjFeX2JeXmJcXGBbXGBaW19ZWl5ZWV5YWF1XV1xWV1xVVltUVVpUVFlTVFleVStSUlhRUldQUVdPUFZPT1VOT1RMTVJLTFJKS1FKSlBJSk9ISU5HSE1HR0xGR0tERUpDRElCQ0dCQkdLRCFBQUZAQEU/P0Q+PkM9PUI7PEA6Oz85Oj44OT03ODw2Nzs1Njo1NTkzMzcyMzYsLDAnKComJikAAAEJNgHRAAAAAXRSTlMAQObYZgAAAUNJREFUeAEFwUuOjkEUANBT33d/WpP2DjMzI7ZWi6mBXRgI5iSdWIA1YEDiGbr7r1vXOQHQMQAC0F89vP+gD0AAfP7i2pM+gABo2uEAEEBHO4Q+QID+cWot4uvsAwL45Tm3T/7dAQL4rbi7nZ4CAfwk9u305gYEGP1Ftvbsxg0DBODpp6NtGUAAfq99SYAA/NpqX+uyDxCgv22auRIQ0D9836ynOfOqDwjwDVvNzAQC/fwPZK65X/WBgB+rUbVmrgRBf/+vKS1zZuaxDwJ/Z6tG1czjngeE/u6CRlVlrpzHPgSXVxtWW5mZM/JA9POrRtlUrZx75kUf4eKilUatXDPyuAfhclsN1apqzn3l3HuM/nJjaVZVzsjtZB/BYamm1Mrcrp/dakMY3ZuqVVVVZ7funRgEQ+d1rarHZ48MCBh0YAD/AXyTtZ9lHAfMAAAAAElFTkSuQmCC"},
        attSelectedBoost: {value: "None", label: "None", icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAeCAMAAAD0DqVnAAABTVBMVEUAAACzs7Wzs7OxsrOqqq25qFW2pVSxoVGvn1Cqmk18fHx7e3uKfj96ent5enp5eXp4eHmHez53d3h2dnd2dnZ1dXaEeDx0dHZzdHVzc3SCdjtycnRxcXNxcXJwcHJ/czlvb3Fub3FubnBtbW9sbW9sbG5ra21qam1qamxpaWxoaGt1azZnaGpmZmllZWhkZWhyZzRkZGdjY2diYmZvZTNhYmVgYWRfX2NsYjFeX2JeXmJcXGBbXGBaW19ZWl5ZWV5YWF1XV1xWV1xVVltUVVpUVFlTVFleVStSUlhRUldQUVdPUFZPT1VOT1RMTVJLTFJKS1FKSlBJSk9ISU5HSE1HR0xGR0tERUpDRElCQ0dCQkdLRCFBQUZAQEU/P0Q+PkM9PUI7PEA6Oz85Oj44OT03ODw2Nzs1Njo1NTkzMzcyMzYsLDAnKComJikAAAEJNgHRAAAAAXRSTlMAQObYZgAAAUNJREFUeAEFwUuOjkEUANBT33d/WpP2DjMzI7ZWi6mBXRgI5iSdWIA1YEDiGbr7r1vXOQHQMQAC0F89vP+gD0AAfP7i2pM+gABo2uEAEEBHO4Q+QID+cWot4uvsAwL45Tm3T/7dAQL4rbi7nZ4CAfwk9u305gYEGP1Ftvbsxg0DBODpp6NtGUAAfq99SYAA/NpqX+uyDxCgv22auRIQ0D9836ynOfOqDwjwDVvNzAQC/fwPZK65X/WBgB+rUbVmrgRBf/+vKS1zZuaxDwJ/Z6tG1czjngeE/u6CRlVlrpzHPgSXVxtWW5mZM/JA9POrRtlUrZx75kUf4eKilUatXDPyuAfhclsN1apqzn3l3HuM/nJjaVZVzsjtZB/BYamm1Mrcrp/dakMY3ZuqVVVVZ7funRgEQ+d1rarHZ48MCBh0YAD/AXyTtZ9lHAfMAAAAAElFTkSuQmCC"},
        defSelectedBoost: {value: "None", label: "None", icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAeCAMAAAD0DqVnAAABTVBMVEUAAACzs7Wzs7OxsrOqqq25qFW2pVSxoVGvn1Cqmk18fHx7e3uKfj96ent5enp5eXp4eHmHez53d3h2dnd2dnZ1dXaEeDx0dHZzdHVzc3SCdjtycnRxcXNxcXJwcHJ/czlvb3Fub3FubnBtbW9sbW9sbG5ra21qam1qamxpaWxoaGt1azZnaGpmZmllZWhkZWhyZzRkZGdjY2diYmZvZTNhYmVgYWRfX2NsYjFeX2JeXmJcXGBbXGBaW19ZWl5ZWV5YWF1XV1xWV1xVVltUVVpUVFlTVFleVStSUlhRUldQUVdPUFZPT1VOT1RMTVJLTFJKS1FKSlBJSk9ISU5HSE1HR0xGR0tERUpDRElCQ0dCQkdLRCFBQUZAQEU/P0Q+PkM9PUI7PEA6Oz85Oj44OT03ODw2Nzs1Njo1NTkzMzcyMzYsLDAnKComJikAAAEJNgHRAAAAAXRSTlMAQObYZgAAAUNJREFUeAEFwUuOjkEUANBT33d/WpP2DjMzI7ZWi6mBXRgI5iSdWIA1YEDiGbr7r1vXOQHQMQAC0F89vP+gD0AAfP7i2pM+gABo2uEAEEBHO4Q+QID+cWot4uvsAwL45Tm3T/7dAQL4rbi7nZ4CAfwk9u305gYEGP1Ftvbsxg0DBODpp6NtGUAAfq99SYAA/NpqX+uyDxCgv22auRIQ0D9836ynOfOqDwjwDVvNzAQC/fwPZK65X/WBgB+rUbVmrgRBf/+vKS1zZuaxDwJ/Z6tG1czjngeE/u6CRlVlrpzHPgSXVxtWW5mZM/JA9POrRtlUrZx75kUf4eKilUatXDPyuAfhclsN1apqzn3l3HuM/nJjaVZVzsjtZB/BYamm1Mrcrp/dakMY3ZuqVVVVZ7funRgEQ+d1rarHZ48MCBh0YAD/AXyTtZ9lHAfMAAAAAElFTkSuQmCC"},
        rangeSelectedBoost: {value: "None", label: "None", icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAeCAMAAAD0DqVnAAABTVBMVEUAAACzs7Wzs7OxsrOqqq25qFW2pVSxoVGvn1Cqmk18fHx7e3uKfj96ent5enp5eXp4eHmHez53d3h2dnd2dnZ1dXaEeDx0dHZzdHVzc3SCdjtycnRxcXNxcXJwcHJ/czlvb3Fub3FubnBtbW9sbW9sbG5ra21qam1qamxpaWxoaGt1azZnaGpmZmllZWhkZWhyZzRkZGdjY2diYmZvZTNhYmVgYWRfX2NsYjFeX2JeXmJcXGBbXGBaW19ZWl5ZWV5YWF1XV1xWV1xVVltUVVpUVFlTVFleVStSUlhRUldQUVdPUFZPT1VOT1RMTVJLTFJKS1FKSlBJSk9ISU5HSE1HR0xGR0tERUpDRElCQ0dCQkdLRCFBQUZAQEU/P0Q+PkM9PUI7PEA6Oz85Oj44OT03ODw2Nzs1Njo1NTkzMzcyMzYsLDAnKComJikAAAEJNgHRAAAAAXRSTlMAQObYZgAAAUNJREFUeAEFwUuOjkEUANBT33d/WpP2DjMzI7ZWi6mBXRgI5iSdWIA1YEDiGbr7r1vXOQHQMQAC0F89vP+gD0AAfP7i2pM+gABo2uEAEEBHO4Q+QID+cWot4uvsAwL45Tm3T/7dAQL4rbi7nZ4CAfwk9u305gYEGP1Ftvbsxg0DBODpp6NtGUAAfq99SYAA/NpqX+uyDxCgv22auRIQ0D9836ynOfOqDwjwDVvNzAQC/fwPZK65X/WBgB+rUbVmrgRBf/+vKS1zZuaxDwJ/Z6tG1czjngeE/u6CRlVlrpzHPgSXVxtWW5mZM/JA9POrRtlUrZx75kUf4eKilUatXDPyuAfhclsN1apqzn3l3HuM/nJjaVZVzsjtZB/BYamm1Mrcrp/dakMY3ZuqVVVVZ7funRgEQ+d1rarHZ48MCBh0YAD/AXyTtZ9lHAfMAAAAAElFTkSuQmCC"},
        mageSelectedBoost: {value: "None", label: "None", icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAeCAMAAAD0DqVnAAABTVBMVEUAAACzs7Wzs7OxsrOqqq25qFW2pVSxoVGvn1Cqmk18fHx7e3uKfj96ent5enp5eXp4eHmHez53d3h2dnd2dnZ1dXaEeDx0dHZzdHVzc3SCdjtycnRxcXNxcXJwcHJ/czlvb3Fub3FubnBtbW9sbW9sbG5ra21qam1qamxpaWxoaGt1azZnaGpmZmllZWhkZWhyZzRkZGdjY2diYmZvZTNhYmVgYWRfX2NsYjFeX2JeXmJcXGBbXGBaW19ZWl5ZWV5YWF1XV1xWV1xVVltUVVpUVFlTVFleVStSUlhRUldQUVdPUFZPT1VOT1RMTVJLTFJKS1FKSlBJSk9ISU5HSE1HR0xGR0tERUpDRElCQ0dCQkdLRCFBQUZAQEU/P0Q+PkM9PUI7PEA6Oz85Oj44OT03ODw2Nzs1Njo1NTkzMzcyMzYsLDAnKComJikAAAEJNgHRAAAAAXRSTlMAQObYZgAAAUNJREFUeAEFwUuOjkEUANBT33d/WpP2DjMzI7ZWi6mBXRgI5iSdWIA1YEDiGbr7r1vXOQHQMQAC0F89vP+gD0AAfP7i2pM+gABo2uEAEEBHO4Q+QID+cWot4uvsAwL45Tm3T/7dAQL4rbi7nZ4CAfwk9u305gYEGP1Ftvbsxg0DBODpp6NtGUAAfq99SYAA/NpqX+uyDxCgv22auRIQ0D9836ynOfOqDwjwDVvNzAQC/fwPZK65X/WBgB+rUbVmrgRBf/+vKS1zZuaxDwJ/Z6tG1czjngeE/u6CRlVlrpzHPgSXVxtWW5mZM/JA9POrRtlUrZx75kUf4eKilUatXDPyuAfhclsN1apqzn3l3HuM/nJjaVZVzsjtZB/BYamm1Mrcrp/dakMY3ZuqVVVVZ7funRgEQ+d1rarHZ48MCBh0YAD/AXyTtZ9lHAfMAAAAAElFTkSuQmCC"},
        otherSelectedBoost: {value: "None", label: "None", icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAeCAMAAAD0DqVnAAABTVBMVEUAAACzs7Wzs7OxsrOqqq25qFW2pVSxoVGvn1Cqmk18fHx7e3uKfj96ent5enp5eXp4eHmHez53d3h2dnd2dnZ1dXaEeDx0dHZzdHVzc3SCdjtycnRxcXNxcXJwcHJ/czlvb3Fub3FubnBtbW9sbW9sbG5ra21qam1qamxpaWxoaGt1azZnaGpmZmllZWhkZWhyZzRkZGdjY2diYmZvZTNhYmVgYWRfX2NsYjFeX2JeXmJcXGBbXGBaW19ZWl5ZWV5YWF1XV1xWV1xVVltUVVpUVFlTVFleVStSUlhRUldQUVdPUFZPT1VOT1RMTVJLTFJKS1FKSlBJSk9ISU5HSE1HR0xGR0tERUpDRElCQ0dCQkdLRCFBQUZAQEU/P0Q+PkM9PUI7PEA6Oz85Oj44OT03ODw2Nzs1Njo1NTkzMzcyMzYsLDAnKComJikAAAEJNgHRAAAAAXRSTlMAQObYZgAAAUNJREFUeAEFwUuOjkEUANBT33d/WpP2DjMzI7ZWi6mBXRgI5iSdWIA1YEDiGbr7r1vXOQHQMQAC0F89vP+gD0AAfP7i2pM+gABo2uEAEEBHO4Q+QID+cWot4uvsAwL45Tm3T/7dAQL4rbi7nZ4CAfwk9u305gYEGP1Ftvbsxg0DBODpp6NtGUAAfq99SYAA/NpqX+uyDxCgv22auRIQ0D9836ynOfOqDwjwDVvNzAQC/fwPZK65X/WBgB+rUbVmrgRBf/+vKS1zZuaxDwJ/Z6tG1czjngeE/u6CRlVlrpzHPgSXVxtWW5mZM/JA9POrRtlUrZx75kUf4eKilUatXDPyuAfhclsN1apqzn3l3HuM/nJjaVZVzsjtZB/BYamm1Mrcrp/dakMY3ZuqVVVVZ7funRgEQ+d1rarHZ48MCBh0YAD/AXyTtZ9lHAfMAAAAAElFTkSuQmCC"},
        boostedRange: 99,
        boostedDef: 99,
        boostedStr: 99,
        boostedMage: 99,
        boostedAtt: 99,
        boostedMining: 99,

        //Combat style
        combatStyle: 'Accurate - Crush',
        

        //Equipment Bonuses
        stabBonus: 0,
        slashBonus: 0,
        crushBonus: 0,
        mageBonus: 0,
        rangedBonus: 0,
        strengthBonus: 0,
        stabDef: 0,
        slashDef: 0,
        crushDef: 0,
        mageDef: 0,
        rangedDef: 0,
        strengthDef: 0,
        rangedStrengthBonus: 0,
        mageStrengthBonus: 0,
        prayerBonus: 0,
        attackSpeed: 4
    }

    setGear = (type, gear) => {
        var e = {...this.state.equipment};
        if (gear == null) {
            e[type] = null;
        } else {
            e[type] = gear.label;
        }
        

        this.setState({
            equipment: e
        }, () => {
            console.log(this.state.equipment.weapon);
            this.setState({
                attackSpeed: (this.state.equipment.weapon == null) ? 4 : attributes.equipment["weapon"][this.state.equipment.weapon]["aS"]
            }, () => {
                console.log(this.state.attackSpeed);
            })

            
        })
    }

    setMonster = (m) => {
        this.setState({
            monster: {...m}
        }, () => {
            //console.log(this.state)
        })
    }

    setSpell = (s, n) => {
        var oN = null;
        if (n == 'Spell') {
            oN = 'Spell - Magic';
        } else if (n == 'Spell (Def)') {
            oN = 'Defensive Spell - Magic';
        }
        this.setState({
            spell: s,
            combatStyle: oN
        }, () => {
            
        })
    }

    setCombatStyle = (style) => {
        this.setState({
            combatStyle: style
        }, () => {
            //console.log(this.state);
        })
    }

    checkboxClickHandler = (e, n) => {
        var getcheck = this.state[n]
        this.setState({
            [n]: !getcheck
        }, () => {
            //console.log(this.state)
        })
        
    }

    calculateAttributeBonusHandler = (item, type, previous) => {
        // console.log( (attributes.equipment)[type][item] );
        // console.log(item);
        // console.log(type);

        this.setState({
            stabBonus: this.state.stabBonus + (item == null ? 0 : (attributes.equipment)[type][item.label]["at"]) - (previous == null ? 0 : (attributes.equipment)[type][previous.label]["at"]),
            slashBonus: this.state.slashBonus + (item == null ? 0 : (attributes.equipment)[type][item.label]["al"]) - (previous == null ? 0 : (attributes.equipment)[type][previous.label]["al"]),
            crushBonus: this.state.crushBonus + (item == null ? 0 : (attributes.equipment)[type][item.label]["ac"]) - (previous == null ? 0 : (attributes.equipment)[type][previous.label]["ac"]),
            mageBonus: this.state.mageBonus + (item == null ? 0 : (attributes.equipment)[type][item.label]["am"]) - (previous == null ? 0 : (attributes.equipment)[type][previous.label]["am"]),
            rangedBonus: this.state.rangedBonus + (item == null ? 0 : (attributes.equipment)[type][item.label]["ar"]) - (previous == null ? 0 : (attributes.equipment)[type][previous.label]["ar"]),
            strengthBonus: this.state.strengthBonus + (item == null ? 0 : (attributes.equipment)[type][item.label]["bs"]) - (previous == null ? 0 : (attributes.equipment)[type][previous.label]["bs"]),
            rangedStrengthBonus: this.state.rangedStrengthBonus + (item == null ? 0 : (attributes.equipment)[type][item.label]["br"]) - (previous == null ? 0 : (attributes.equipment)[type][previous.label]["br"]),
            mageStrengthBonus: this.state.mageStrengthBonus + (item == null ? 0 : (attributes.equipment)[type][item.label]["bm"]) - (previous == null ? 0 : (attributes.equipment)[type][previous.label]["bm"]),
            prayerBonus: this.state.prayerBonus + (item == null ? 0 : (attributes.equipment)[type][item.label]["pr"]) - (previous == null ? 0 : (attributes.equipment)[type][previous.label]["pr"]),
            slashDef: this.state.slashDef + (item == null ? 0 : (attributes.equipment)[type][item.label]["dl"]) - (previous == null ? 0 : (attributes.equipment)[type][previous.label]["dl"]),
            stabDef: this.state.stabDef + (item == null ? 0 : (attributes.equipment)[type][item.label]["dt"]) - (previous == null ? 0 : (attributes.equipment)[type][previous.label]["dt"]),
            crushDef: this.state.crushDef + (item == null ? 0 : (attributes.equipment)[type][item.label]["dc"]) - (previous == null ? 0 : (attributes.equipment)[type][previous.label]["dc"]),
            mageDef: this.state.mageDef + (item == null ? 0 : (attributes.equipment)[type][item.label]["dm"]) - (previous == null ? 0 : (attributes.equipment)[type][previous.label]["dm"]),
            rangedDef: this.state.rangedDef + (item == null ? 0 : (attributes.equipment)[type][item.label]["dr"]) - (previous == null ? 0 : (attributes.equipment)[type][previous.label]["dr"]),
            // attackSpeed: (type == "weapon" && (item != null && attributes.equipment)[type][item.label]["aS"]) ? (attributes.equipment)[type][item.label]["aS"] : 4 

        }, () => {
            //console.log(this.state)
        })
    }

    setChinDistance = (d) => {
        this.setState({
            chindistance: d
        }, () => {
            //console.log(this.state);
        })
    }

    //Player Stats Tab:
    recalculateBoost = (trigger, input) => { //helper function to recalculate boosted stats upon input change / hiscores fetch
        var c = null;
        var recalc = false;
        var recalcBoost = null;
        switch (trigger) {
            case "strengthLevel":
                recalc = true; 
                c = "boostedStr"; 
                recalcBoost = this.state.strSelectedBoost ? this.boostStatHandler(this.state.strSelectedBoost.label, "str", parseInt(input)) : parseInt(input); 
                break;
            case "attackLevel":
                recalc = true; 
                c = "boostedAtt"; 
                recalcBoost = this.state.attSelectedBoost ? this.boostStatHandler(this.state.attSelectedBoost.label, "att", parseInt(input)) : parseInt(input); 
                break;
            case "defenceLevel":
                
                recalc = true; 
                c = "boostedDef"; 
                recalcBoost = this.state.defSelectedBoost ? this.boostStatHandler(this.state.defSelectedBoost.label, "def", parseInt(input)): parseInt(input);
                 break;
            case "rangedLevel":
                recalc = true; 
                c = "boostedRange"; 
                
                recalcBoost = this.state.rangeSelectedBoost ? this.boostStatHandler(this.state.rangeSelectedBoost.label, "ran", parseInt(input)): parseInt(input);
                break;
            case "mageLevel":
                recalc = true; 
                c = "boostedMage"; 
                recalcBoost = this.state.mageSelectedBoost ? this.boostStatHandler(this.state.mageSelectedBoost.label, "mag", parseInt(input)): parseInt(input);
                break;
        }
        if (recalc) {
            this.setState({
                [c]: recalcBoost
            })
        }
    }

    recalcAllBoosts = () => {
        var bStr = this.state.strSelectedBoost != null ? this.boostStatHandler(this.state.strSelectedBoost.label, "str", parseInt(this.state.strengthLevel)) : this.state.strengthLevel;
        var bAtt = this.state.attSelectedBoost != null ? this.boostStatHandler(this.state.attSelectedBoost.label, "att", parseInt(this.state.attackLevel)) : this.state.attackLevel;
        var bDef = this.state.defSelectedBoost != null ? this.boostStatHandler(this.state.defSelectedBoost.label, "def", parseInt(this.state.defenceLevel)) : this.state.defenceLevel;
        var bRan = this.state.rangeSelectedBoost != null ? this.boostStatHandler(this.state.rangeSelectedBoost.label, "ran", parseInt(this.state.rangedLevel)) : this.state.rangedLevel;
        var bMag = this.state.mageSelectedBoost != null ? this.boostStatHandler(this.state.mageSelectedBoost.label, "mag", parseInt(this.state.mageLevel)) : this.state.mageLevel;
        this.setState({
            boostedAtt: bAtt,
            boostedStr: bStr,
            boostedDef: bDef,
            boostedRange: bRan,
            boostedMage: bMag
        }, () => {
            //reboost str (dragon battleaxe bug fix)
            var doubleStrBoost = this.state.strSelectedBoost != null ? this.boostStatHandler(this.state.strSelectedBoost.label, "str", parseInt(this.state.strengthLevel)) : this.state.strengthLevel;
            this.setState({
                boostedStr: doubleStrBoost
            })
        })
    }

    statsChangeHandler = (level, val) => {
        var input = level.slice(0, 2);

        this.setState({
            [val]: input,
        }, () => { //RECALCULATE BOOSTEDSTATS AFTER STATS INPUT HAS CHANGED
            this.recalculateBoost(val, input);
            // this.props.setIndividualStat(val, input);
            // if (this.state.visibleHitpoints > this.state.hitpointsLevel) {
            //     this.setState({
            //         hitpointsLevel: this.state.visibleHitpoints
            //     })
            // }
            //console.log(this.state);
        })
    }

    hiscoreFetchHandler = (atk, str, def, hp, rng, mag, pray, min) => {
        this.setState({
            attackLevel: atk,
            strengthLevel: str,
            defenceLevel: def,
            hitpointsLevel: hp,
            visibleHitpoints: (hp < this.state.visibleHitpoints) ? hp : this.state.visibleHitpoints,
            rangedLevel: rng,
            mageLevel: mag,
            prayerLevel: pray,
            miningLevel: min
        }, () => { //RECALCULATE BOOSTEDSTATS AFTER STATS INPUT HAS CHANGED
            this.recalcAllBoosts();
            // this.props.setStats(atk, str, def, hp, rng, mag, pray, this.state.visibleHitpoints); //set stats in parent component to pass to dps calculations
        })
    }

    //Stat boosts tab
    boostStatHandler = (boost, type, level) => {
        // console.log("boost: ", boost, " type: ",type, " level: ", level)
        level = parseInt(level);
        switch (boost) {
            case "Bastion potion":
                if (type == "ran") { //Bastion potion for ranged
                    var boosted = Math.floor(0.1 * level) + 4;
                    return level+boosted;
                } else if (type == "def") { //Bastion potion for defence
                    var boosted = Math.floor(0.15 * level) + 5;
                    
                    return level+boosted;
                }
            
            case "Battlemage potion":
                if (type == "mag") {
                    return level+4;
                } else if (type == "def") {
                    var boosted = Math.floor(0.15 * level) + 5;
                    return level+boosted;
                }
            
            case "Dragon battleaxe":
                var drain = 0.1*(this.state.boostedAtt + this.state.boostedDef + this.state.boostedMage + this.state.boostedRange);
                var boosted = 10 + Math.floor(drain/4);
                return level+boosted;
            
            case "Imbued heart":
                var boosted = Math.floor(this.state.mageLevel / 10) + 1;
                return level+boosted;
            
            case "Overload (+)":
            case "Elder (+)":
            case "Kodai (+)":
            case "Twisted potion (+)":
                var boosted = Math.floor(0.16 * level) + 6;
                return level + boosted;

            case "Ranging potion":
                var boosted = Math.floor(0.1 * level) + 4;
                return level + boosted;
            
            case "Saradomin brew":
                var boosted = Math.floor(0.2 * level) + 2;
                return level + boosted;
            
            case "Super combat potion":
            case "Super magic potion":
            case "Super ranging":
            case "Super attack":
            case "Super defence":
            case "Super strength":
            case "Overload (NMZ)":
                var boosted = Math.floor(0.15 * level) + 5;
                return level + boosted;
            
            case "Xeric's aid (+)":
                var boosted = Math.floor(0.2 * level) + 5;
                return level + boosted;
            
            case "Zamorak brew":
                if (type == "att") {
                    var boosted = Math.floor(0.2 * level) + 2;
                    return level + boosted;
                } else if (type == "str") {
                    var boosted = Math.floor(0.12 * level) + 2;
                    return level + boosted;
                }
            
            case "Attack potion":
            case "Combat potion":
            case "Defence potion":
            case "Strength potion":
                var boosted = Math.floor(0.1 * level) + 3;
                    return level + boosted;
            
            case "Elder potion":
            case "Kodai potion":
            case "Overload":
            case "Twisted potion":
                var boosted = Math.floor(0.13 * level) + 5;
                    return level + boosted;
            
            case "Elder (-)":
            case "Kodai (-)":
            case "Overload (-)":
            case "Twisted potion (-)":
                var boosted = Math.floor(0.1 * level) + 4;
                    return level + boosted;
            
            case "Excalibur":
                return level + 8;
            
            case "Magic essence":
                return level + 3;
            
            case "Magic potion":
                return level + 4;
            
            case "Dragon pickaxe":
                return level + 3;
            
            default:
                return level;
        }
    }

    setStrBoost = (boost) => {
        var newLvl = this.boostStatHandler(boost.label, "str", this.state.strengthLevel);
        this.setState({
            strSelectedBoost: boost,
            boostedStr: newLvl
        }, () => {
            console.log(this.state)
        })
    }

    setAttBoost = (boost) => {
        var newLvl = this.boostStatHandler(boost.label, "att", this.state.attackLevel);
        this.setState({
            attSelectedBoost: boost,
            boostedAtt: newLvl
        }, () => {
            console.log(this.state)
        })
    }

    setDefBoost = (boost) => {
        var newLvl = this.boostStatHandler(boost.label, "def", this.state.defenceLevel);
        this.setState({
            defSelectedBoost: boost,
            boostedDef: newLvl
        }, () => {
            console.log(this.state)
        })
    }

    setMagBoost = (boost) => {
        var newLvl = this.boostStatHandler(boost.label, "mag", this.state.mageLevel);
        this.setState({
            mageSelectedBoost: boost,
            boostedMage: newLvl
        }, () => {
            console.log(this.state)
        })
    }

    setRanBoost = (boost) => {
        var newLvl = this.boostStatHandler(boost.label, "ran", this.state.rangedLevel);
        this.setState({
            rangeSelectedBoost: boost,
            boostedRange: newLvl
        }, () => {
            console.log(this.state)
        })
    }

    setOtherBoost = (boost) => {
        var newLvl = this.boostStatHandler(boost.label, "other", this.state.miningLevel);
        this.setState({
            otherSelectedBoost: boost,
            boostedMining: newLvl
        }, () => {
            console.log(this.state)
        })
    }



    //Prayer tab
    prayerClickHandler = (prayerName) => {
        var selPrayers = [...(this.state.selectedPrayers)];

        if (!selPrayers.includes(prayerName)) {
            selPrayers.push(prayerName);
            PRAYER_TURNOFF[prayerName].TurnsOff.forEach(t => {
                const index = selPrayers.indexOf(t);
                if (index > -1) {
                    selPrayers.splice(index, 1);
                }
            })
        } else {
            const index = selPrayers.indexOf(prayerName);
            if (index > -1) {
                selPrayers.splice(index, 1);
            }
        }
        this.setState({
            selectedPrayers: [...selPrayers]
        }, () => {
            console.log(this.state)
        })
    }

    componentDidMount() {
        //console.log(calc);
    }



    render() {
        return (
            <div className="calc-overall-layout" style={{marginTop: "50px"}}>
                {/* Dps calc react code is mounted here */}
                <PlayerInputs prayerClickHandler={this.prayerClickHandler} selectedPrayers={this.state.selectedPrayers} setCombatStyle={this.setCombatStyle} boostedMining={this.state.boostedMining} visibleHitpoints={this.state.visibleHitpoints} boostedStr={this.state.boostedStr} boostedRange={this.state.boostedRange} boostedMage={this.state.boostedMage} boostedDef={this.state.boostedDef} boostedAtt={this.state.boostedAtt} boostStatHandler={this.boostStatHandler} setStrBoost={this.setStrBoost} setAttBoost={this.setAttBoost} setDefBoost={this.setDefBoost} setMagBoost={this.setMagBoost} setRanBoost={this.setRanBoost} setOtherBoost={this.setOtherBoost} otherSelectedBoost={this.state.otherSelectedBoost} mageSelectedBoost={this.state.mageSelectedBoost} rangeSelectedBoost={this.state.rangeSelectedBoost} defSelectedBoost={this.state.defSelectedBoost} attSelectedBoost={this.state.attSelectedBoost} strSelectedBoost={this.state.strSelectedBoost} hiscoreFetchHandler={this.hiscoreFetchHandler} statsChangeHandler={this.statsChangeHandler} attackLevel={this.state.attackLevel} strengthLevel={this.state.strengthLevel} defenceLevel={this.state.defenceLevel} hitpointsLevel={this.state.hitpointsLevel} rangedLevel={this.state.rangedLevel} miningLevel={this.state.miningLevel} prayerLevel={this.state.prayerLevel} mageLevel={this.state.mageLevel} setChinDistance={this.setChinDistance} checkwildy={this.state.checkedwildy} checkboxClick = {this.checkboxClickHandler} setSpell={this.setSpell} setGear={this.setGear} calcAttributes={this.calculateAttributeBonusHandler}/>
                <CombatAttributes dr={this.state.rangedDef} dm={this.state.mageDef} dc={this.state.crushDef} dt={this.state.stabDef} dl={this.state.slashDef} at={this.state.stabBonus} al={this.state.slashBonus} ac={this.state.crushBonus} am={this.state.mageBonus} ar={this.state.rangedBonus} bs={this.state.strengthBonus} br={this.state.rangedStrengthBonus} bm={this.state.mageStrengthBonus} pr={this.state.prayerBonus}/>
                <MonsterAttributes setMonster={this.setMonster}/>
                <Results 
                    equipment={this.state.equipment}
                    monster={this.state.monster}
                    spell={this.state.spell}
                    checkedwildy={this.state.checkedwildy}
                    chindistance={this.state.chindistance}
                    combatStyle= {this.state.combatStyle}
                    attackSpeed= {this.state.attackSpeed}
                    selectedPrayers={this.state.selectedPrayers}
                    rangedStrengthBonus={this.state.rangedStrengthBonus}
                    mageStrengthBonus={this.state.mageStrengthBonus}
                    strengthBonus={this.state.strengthBonus}
                    rangedBonus={this.state.rangedBonus}
                    mageBonus={this.state.mageBonus}
                    stabBonus={this.state.stabBonus}
                    slashBonus={this.state.slashBonus}
                    crushBonus={this.state.crushBonus}
                    attackLevel={this.state.attackLevel}
                    strengthLevel={this.state.strengthLevel}
                    defenceLevel={this.state.defenceLevel}
                    hitpointsLevel={this.state.hitpointsLevel}
                    rangedLevel={this.state.rangedLevel}
                    mageLevel={this.state.mageLevel}
                    prayerLevel={this.state.prayerLevel}
                    miningLevel={this.state.miningLevel}
                    visibleHitpoints={this.state.visibleHitpoints}
                    boostedAtt={this.state.boostedAtt}
                    boostedStr={this.state.boostedStr}
                    boostedDef={this.state.boostedDef}
                    boostedRange={this.state.boostedRange}
                    boostedMage={this.state.boostedMage}
                    boostedMining={this.state.boostedMining}
                />
            </div>
        )
    }
}

ReactDOM.render(
    <DpsCalculator />,
    document.getElementById('dpscalc')
);