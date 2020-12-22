import React from 'react';
import ReactDOM from 'react-dom';

import PlayerInputs from './PlayerInputs/PlayerInputs';
import CombatAttributes from './CombatAttributes/CombatAttributes';
import MonsterAttributes from './MonsterAttributes/MonsterAttributes';
import Results from './Results/Results';

import * as attributes from './dpsattributes';
import calc from './utils/calc';

import './DpsCalculator.css';

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
}

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
        strSelectedBoost: null,
        attSelectedBoost: null,
        defSelectedBoost: null,
        rangeSelectedBoost: null,
        mageSelectedBoost: null,
        otherSelectedBoost: null,
        boostedRange: 99,
        boostedDef: 99,
        boostedStr: 99,
        boostedMage: 99,
        boostedAtt: 99,
        boostedMining: 99,
        

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
        prayerBonus: 0
    }

    setGear = (type, gear) => {
        var e = {...this.state.equipment};
        e[type] = gear;
        this.setState({
            equipment: e
        }, () => {
            console.log(this.state);
            // console.log("Set Gear");
            // console.log(this.state);
            // console.log("MVOID::::");
            
            var loadout = {
                equipment: {...this.state.equipment},
                monster: {...this.state.monster},
                spell: {...this.state.spell},
                wilderness: this.state.checkedwildy,
                targetdistance: this.state.chindistance,
                wepMiningLvl: ((this.state.equipment.weapon).includes('pickaxe') ? WEP_MINING_LEVEL[this.state.equipment.weapon]: 0),
                playerLevel: {
                    current: {
                        Attack: parseInt(this.state.attackLevel),
                        Strength: parseInt(this.state.strengthLevel),
                        Defence: parseInt(this.state.defenceLevel),
                        Hitpoints: parseInt(this.state.hitpointsLevel),
                        Ranged: parseInt(this.state.rangedLevel),
                        Magic: parseInt(this.state.mageLevel),
                        Prayer: parseInt(this.state.prayerLevel),
                        Mining: parseInt(this.state.miningLevel)
                    },
                    visible: {
                        Hitpoints: parseInt(this.state.visibleHitpoints),
                        Attack: parseInt(this.state.boostedAtt),
                        Strength: parseInt(this.state.boostedStr),
                        Defence: parseInt(this.state.boostedDef),
                        Ranged: parseInt(this.state.boostedRange),
                        Magic: parseInt(this.state.boostedMage),
                        Mining: parseInt(this.state.boostedMining)
                        //Prayer: parseInt(this.state.prayerLevel) //may need to change to visible
                    }
                }
            }

            // // console.log(calc.check.MVoid(loadout, 'Void mage helm', 'NORMAL', 'ELITE'));
            // // console.log(calc.check.MMaskSalve(loadout, true, 'MASK', 'SALVE', 'SALVE_E'));
            // console.log(calc.check.MSmokeStaff(loadout));
            // console.log(calc.check.MDharok(loadout))
        })
    }

    setMonster = (m) => {
        this.setState({
            monster: m
        })
    }

    setSpell = (s) => {
        this.setState({
            spell: s
        }, () => {
            
        })
    }

    checkboxClickHandler = (e, n) => {
        var getcheck = this.state[n]
        this.setState({
            [n]: !getcheck
        }, () => {
            console.log(this.state)
        })
        
    }

    calculateAttributeBonusHandler = (item, type, previous) => {
        // console.log( (attributes.equipment)[type][item] );

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
            rangedDef: this.state.rangedDef + (item == null ? 0 : (attributes.equipment)[type][item.label]["dr"]) - (previous == null ? 0 : (attributes.equipment)[type][previous.label]["dr"])
        }, () => {
            console.log(this.state)
        })
    }

    setChinDistance = (d) => {
        this.setState({
            chindistance: d
        }, () => {
            console.log(this.state);
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
            console.log(this.state);
        })
    }

    hiscoreFetchHandler = (atk, str, def, hp, rng, mag, pray) => {
        this.setState({
            attackLevel: atk,
            strengthLevel: str,
            defenceLevel: def,
            hitpointsLevel: hp,
            visibleHitpoints: (hp < this.state.visibleHitpoints) ? hp : this.state.visibleHitpoints,
            rangedLevel: rng,
            mageLevel: mag,
            prayerLevel: pray
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
        this.setState({
            otherSelectedBoost: boost
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
                <PlayerInputs boostedMining={this.state.boostedMining} visibleHitpoints={this.state.visibleHitpoints} boostedStr={this.state.boostedStr} boostedRange={this.state.boostedRange} boostedMage={this.state.boostedMage} boostedDef={this.state.boostedDef} boostedAtt={this.state.boostedAtt} boostStatHandler={this.boostStatHandler} setStrBoost={this.setStrBoost} setAttBoost={this.setAttBoost} setDefBoost={this.setDefBoost} setMagBoost={this.setMagBoost} setRanBoost={this.setRanBoost} setOtherBoost={this.setOtherBoost} otherSelectedBoost={this.state.otherSelectedBoost} mageSelectedBoost={this.state.mageSelectedBoost} rangeSelectedBoost={this.state.rangeSelectedBoost} defSelectedBoost={this.state.defSelectedBoost} attSelectedBoost={this.state.attSelectedBoost} strSelectedBoost={this.state.strSelectedBoost} hiscoreFetchHandler={this.hiscoreFetchHandler} statsChangeHandler={this.statsChangeHandler} attackLevel={this.state.attackLevel} strengthLevel={this.state.strengthLevel} defenceLevel={this.state.defenceLevel} hitpointsLevel={this.state.hitpointsLevel} rangedLevel={this.state.rangedLevel} miningLevel={this.state.miningLevel} prayerLevel={this.state.prayerLevel} mageLevel={this.state.mageLevel} setChinDistance={this.setChinDistance} checkwildy={this.state.checkedwildy} checkboxClick = {this.checkboxClickHandler} setSpell={this.setSpell} setGear={this.setGear} calcAttributes={this.calculateAttributeBonusHandler}/>
                <CombatAttributes dr={this.state.rangedDef} dm={this.state.mageDef} dc={this.state.crushDef} dt={this.state.stabDef} dl={this.state.slashDef} at={this.state.stabBonus} al={this.state.slashBonus} ac={this.state.crushBonus} am={this.state.mageBonus} ar={this.state.rangedBonus} bs={this.state.strengthBonus} br={this.state.rangedStrengthBonus} bm={this.state.mageStrengthBonus} pr={this.state.prayerBonus}/>
                <MonsterAttributes setMonster={this.setMonster}/>
                <Results />
            </div>
        )
    }
}

ReactDOM.render(
    <DpsCalculator />,
    document.getElementById('dpscalc')
);