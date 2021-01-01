import React from 'react';

import './Results.css';

import calc from '../utils/calc';

const WEP_MINING_LEVEL = {
    "Bronze pickaxe": 1,
    "Iron pickaxe": 1,
    "Steel pickaxe": 6,
    "Black pickaxe": 11,
    "Mithril pickaxe": 21,
    "Adamant pickaxe": 31,
    "Rune pickaxe": 41,
    "Dragon pickaxe": 61,
    "3rd age pickaxe": 61,
    "Infernal pickaxe": 61,
    "Corrupted pickaxe": 61,
    "Crystal pickaxe": 61 //capped at 61 for guardian (COX) dps
};



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


class Results extends React.Component {
    state = {
        
    }


    render() {
            var prayers = [];
            this.props.selectedPrayers.forEach( (prayer) => {
                prayers.push(PRAYER_TURNOFF[prayer]);
            })
            
            var loadout = {
                equipment: {...this.props.equipment},
                monster: {...this.props.monster},
                spell: {...this.props.spell},
                wilderness: this.props.checkedwildy,
                targetdistance: this.props.chindistance,
                combatStyle: this.props.combatStyle,
                attackSpeed: this.props.attackSpeed,
                wepMiningLvl: ( ( this.props.equipment.weapon && (this.props.equipment.weapon).includes('pickaxe') ) ? WEP_MINING_LEVEL[this.props.equipment.weapon]: 0),
                prayersArr: prayers,
                equipmentBonus: {
                    br: this.props.rangedStrengthBonus,
                    bm: this.props.mageStrengthBonus,
                    bs: this.props.strengthBonus,
                    ar: this.props.rangedBonus,
                    am: this.props.mageBonus,
                    at: this.props.stabBonus,
                    al: this.props.slashBonus,
                    ac: this.props.crushBonus
                },
                playerLevel: {
                    current: {
                        Attack: parseInt(this.props.attackLevel),
                        Strength: parseInt(this.props.strengthLevel),
                        Defence: parseInt(this.props.defenceLevel),
                        Hitpoints: parseInt(this.props.hitpointsLevel),
                        Ranged: parseInt(this.props.rangedLevel),
                        Magic: parseInt(this.props.mageLevel),
                        Prayer: parseInt(this.props.prayerLevel),
                        Mining: parseInt(this.props.miningLevel)
                    },
                    visible: {
                        Hitpoints: parseInt(this.props.visibleHitpoints),
                        Attack: parseInt(this.props.boostedAtt),
                        Strength: parseInt(this.props.boostedStr),
                        Defence: parseInt(this.props.boostedDef),
                        Ranged: parseInt(this.props.boostedRange),
                        Magic: parseInt(this.props.boostedMage),
                        Mining: parseInt(this.props.boostedMining)
                        //Prayer: parseInt(this.state.prayerLevel) //may need to change to visible
                    }
                }
            }

            // // console.log(calc.check.MVoid(loadout, 'Void mage helm', 'NORMAL', 'ELITE'));
            // // console.log(calc.check.MMaskSalve(loadout, true, 'MASK', 'SALVE', 'SALVE_E'));
            // console.log(calc.check.MSmokeStaff(loadout));
            // console.log(calc.check.MDharok(loadout))
            var args = calc.playerAttack(loadout);
            var aroll = args[0];
            var dstyle = args[1];
            args = calc.playerMaxHit(loadout);
            console.log("playerMaxHit call in Results component: ", args);
            var drollmin = args[0];
            var drollmax = args[1];
            var dtypeless = args[2];
            var ticks = args[3];
            var droll = calc.monsterDefence(loadout,dstyle,false);
            var acc = calc.accuracies(aroll,droll);
            var dps = calc.naiveDPS(acc,drollmin,drollmax,dtypeless,ticks);

            // console.log("acc:", acc);

            var accuracyMeasure = (acc[0].Roll * 100).toFixed(3);
            if (accuracyMeasure == 'NaN') {
                accuracyMeasure = 'N/A';
            } else if (accuracyMeasure > 100) {
                    accuracyMeasure = '100%'
            } else {
                    accuracyMeasure = (acc[0].Roll * 100).toFixed(3) + '%';
            }

            var dpsMeasure = dps.toFixed(5);
            if (dpsMeasure == 'NaN') {
                dpsMeasure = 'N/A';
            }

            var timeToKill = (this.props.monster.Hi / dps).toPrecision(5);
            if (timeToKill == 'NaN') {
                timeToKill = 'N/A';
            } else {
                timeToKill = (this.props.monster.Hi / dps).toPrecision(5) + ' seconds';
            }

        return (
            <div className="results">
                <div style={{ textAlign: 'center', marginTop: '5px' }}><span className="playerinputstext">Results</span></div>
                <div className="result-data" style={{marginTop: "35px"}}>
                    <div className="result-data-header">Max Hit</div>
                    <div className="result-data-val">{drollmax[0].Roll}</div>
                </div>
                <div className="result-data">
                    <div className="result-data-header">Accuracy</div>
                    <div className="result-data-val">{accuracyMeasure}</div>
                </div>
                <div className="result-data">
                    <div className="result-data-header">Damage per second</div>
                    <div className="result-data-val">{dpsMeasure}</div>
                </div>
                <div className="result-data">
                    <div className="result-data-header">Average time to kill</div>
                    <div className="result-data-val">{timeToKill} </div>
                </div>
                <div className="result-data">
                    <div className="result-data-header">Average damage taken</div>
                    <div className="result-data-val">N/A</div>
                </div>
            </div>
        )
    }
}

export default Results;