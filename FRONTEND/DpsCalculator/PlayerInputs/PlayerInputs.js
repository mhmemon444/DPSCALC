import React from 'react';
import EquipmentPanel from './EquipmentPanel/EquipmentPanel';
import PrayerPanel from './PrayerPanel/PrayerPanel';
import SkillsPanel from './SkillsPanel/SkillsPanel';
import StylesPanel from './StylesPanel/StylesPanel';
import SpellsPanel from './SpellsPanel/SpellsPanel';
import BoostsPanel from './BoostsPanel/BoostsPanel';
import './PlayerInputs.css'


import Tab from './Tab/Tab';

const TABS = [
    "Combat",
    "Skills",
    "Equipment",
    "Potions",
    "Prayers"
];

const ATK_STYLE_MAP = {
    slash: "Chop",
    axe: "Chop",
    blunt: "Pound",
    bulwark: "Pummel",
    claws: "Chop",
    polearm: "Jab",
    pickaxe: "Spike",
    scythe: "Reap",
    spear: "Lunge",
    spiked: "Pound",
    stab: "Stab",
    twohanded: "Chop",
    whip: "Flick",
    bow: "Accurate",
    chinchompa: "Short fuse",
    crossbow: "Accurate",
    thrown: "Accurate",
    bladedstaff: "Jab",
    staff: "Bash",
    poweredstaff: "Accurate",
    polestaff: "Bash",
    salamander: "Scorch",
    unarmed: "Punch"
}

class PlayerInputs extends React.Component {
    state = {
        //selected Tabs:
        Combat: false,
        Skills: false,
        Equipment: true, //default selected
        Potions: false,
        Prayers: false,

        //Prayers:
        selectedPrayers: [

        ],

        //Selected gear:
        cape: null,
        head: null,
        neck: null,
        ammo: null,
        weapon: null,
        body: null,
        shield: null,
        legs: null,
        hands: null,
        feet: null,
        ring: null,

        //Player stats:
        username: "",
        attackLevel: 99,
        strengthLevel: 99,
        defenceLevel: 99,
        hitpointsLevel: 99,
        rangedLevel: 99,
        mageLevel: 99,
        prayerLevel: 99,

        //Attack styles:
        selectedStyle1: true,
        selectedStyle2: false,
        selectedStyle3: false,
        selectedStyle4: false,
        selectedStyle5: false,
        selectedOptionName: "Punch",

        //Spells:
        openSpellsTab: false,
        selectedSpell: null,
        spellbook: "regular",

        //Stat boosts:
        
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
        boostedAtt: 99
    }

    selectTabHandler = (tab) => {
        this.setState({
            Combat: false,
            Skills: false,
            Equipment: false,
            Potions: false,
            Prayers: false
        }, () => {
            this.setState({
                [tab]: true,
                openSpellsTab: false
            }, () => {console.log(this.state)})
        })
    }

    //Prayer tab
    prayerClickHandler = (prayerName, active) => {
        var selPrayers = [...(this.state.selectedPrayers)];
        if (active == true) {
            selPrayers.push(prayerName);
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


    //Equipment tab
    setCape = (capeObj) => {
        this.setState({cape: (capeObj.value == "Nothing") ? null : capeObj}, () => {
            console.log(this.state)
        })
    }

    setHead = (headObj) => {
        this.setState({head: (headObj.value == "Nothing") ? null : headObj}, () => {
            console.log(this.state)
        })
    }

    setNeck = (neckObj) => {
        this.setState({neck: (neckObj.value == "Nothing") ? null : neckObj}, () => {
            console.log(this.state)
        })
    }

    setAmmo = (ammoObj) => {
        this.setState({ammo: (ammoObj.value == "Nothing") ? null : ammoObj}, () => {
            console.log(this.state)
        })
    }

    setWep = (wepObj) => {
        this.setState({
            weapon: (wepObj.value == "Nothing") ? null : wepObj,
            shield: ("twohanded" in wepObj) ? null : this.state.shield, //if 2h wep selected, remove shield
            selectedStyle1: true,
            selectedStyle2: false,
            selectedStyle3: false,
            selectedStyle4: false,
            selectedStyle5: false,
            selectedOptionName: ATK_STYLE_MAP[wepObj.type],
            selectedSpell: null
        }, () => {
            console.log(this.state)
        })
    }

    setBody = (bodyObj) => {
        this.setState({body: (bodyObj.value == "Nothing") ? null : bodyObj}, () => {
            console.log(this.state)
        })
    }

    setShield = (shieldObj) => {
        var wep = this.state.weapon;
        if (wep != null) {
            if ("twohanded" in this.state.weapon) {
                wep = null; //turn off 2h wep when shield equipped
            }
        }

        this.setState({
            shield: (shieldObj.value == "Nothing") ? null : shieldObj,
            weapon: wep
        }, () => {
            console.log(this.state)
        })
    }

    setHands = (handsObj) => {
        this.setState({
            hands: (handsObj.value == "Nothing") ? null : handsObj
        }, () => {
            console.log(this.state)
        })
    }

    setFeet = (feetObj) => {
        this.setState({feet: (feetObj.value == "Nothing") ? null : feetObj}, () => {
            console.log(this.state)
        })
    }

    setRing = (ringObj) => {
        this.setState({ring: (ringObj.value == "Nothing") ? null : ringObj}, () => {
            console.log(this.state)
        })
    }

    setLegs = (legsObj) => {
        this.setState({legs: (legsObj.value == "Nothing") ? null : legsObj}, () => {
            console.log(this.state)
        })
    }


    //Player skills tab
    hiscoreFetchHandler = (atk, str, def, hp, rng, mag, pray) => {
        this.setState({
            attackLevel: atk,
            strengthLevel: str,
            defenceLevel: def,
            hitpointsLevel: hp,
            rangedLevel: rng,
            mageLevel: mag,
            prayerLevel: pray
        }, () => {
            console.log(this.state)
        })
    }

    usernameChangeHandler = (event) => {
        this.setState({
            username: event.target.value
        }, () => {
            console.log(this.state)
        })
    }

    statsChangeHandler = (level, val) => {
        var input = level.slice(0, 2);

        this.setState({
            [val]: input,
        }, () => { //RECALCULATE BOOSTEDSTATS AFTER STATS INPUT HAS CHANGED
            var c = null;
            var recalc = false;
            var recalcBoost = null;
            switch (val) {
                case "strengthLevel":
                    recalc = true; c = "boostedStr"; recalcBoost = this.boostStatHandler(this.state.strSelectedBoost.label, "str", parseInt(input)); break;
                case "attackLevel":
                    recalc = true; c = "boostedAtt"; recalcBoost = this.boostStatHandler(this.state.attSelectedBoost, "att", parseInt(input)); break;
                case "defenceLevel":
                    recalc = true; c = "boostedDef"; recalcBoost = this.boostStatHandler(this.state.defSelectedBoost, "def", parseInt(input)); break;
                case "rangedLevel":
                    recalc = true; c = "boostedRange"; recalcBoost = this.boostStatHandler(this.state.rangeSelectedBoost, "ran", parseInt(input)); break;
                case "mageLevel":
                    recalc = true; c = "boostedMage"; recalcBoost = this.boostStatHandler(this.state.mageSelectedBoost, "mag", parseInt(input)); break;
            }
            if (recalc) {
                this.setState({
                    [c]: recalcBoost
                })
            }
        })
    }



    
    //Attack styles tab
    onSelectHandler = (selectedOption, selectedName) => {
        this.setState({
        selectedStyle1: false,
        selectedStyle2: false,
        selectedStyle3: false,
        selectedStyle4: false,
        selectedStyle5: false
        }, () => {
            this.setState({
                [selectedOption]: true,
                selectedOptionName: selectedName,
                openSpellsTab: (selectedName == "Spell" || selectedName == "Spell (Def)") ? true : false
            }, () => {
                console.log(this.state)
            })
            
        })
    }



    //Spells tab
    selectSpellHandler = (spellName, spellImg) => {
        const spellObj = {
            name: spellName,
            rsrc: spellImg
        }

        this.setState({
            selectedSpell: spellObj, //e.g. selectedSpell: {name: "Fire Blast", rsrc: "((...base64 image code))"}
            openSpellsTab: false //close spellsTab after selecting spell
        }, () => {
            console.log(this.state)
        })
    }

    spellbookSwapHandler = () => {
        this.setState({
            spellbook: (this.state.spellbook == "regular") ? "ancients" : "regular"
        })
    }




    //Stat boosts tab
    boostStatHandler = (boost, type, level) => {
        // console.log("boost: ", boost, " type: ",type, " level: ", level)
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

    render() {
        const tabs = TABS.map(tabType => {
            return <Tab type={tabType} selected={this.state[tabType]} click={this.selectTabHandler}/>
        })

        return (
            <div className="playerinputs">

                <div style={{ textAlign: 'center', marginTop: '5px' }}><span className="playerinputstext">Player Inputs</span></div>

                <div className="inputTabs">
                    {tabs}
                </div>

                { this.state.openSpellsTab ? <SpellsPanel spellbook={this.state.spellbook} swapSpellbook={this.spellbookSwapHandler} selectSpell={this.selectSpellHandler} weapon={this.state.weapon}/> 
                : this.state.Equipment ? <EquipmentPanel legs={this.state.legs} setLegs={this.setLegs} ring={this.state.ring} setRing={this.setRing} feet={this.state.feet} setFeet={this.setFeet} hands={this.state.hands} setHands={this.setHands} shield={this.state.shield} setShield={this.setShield} body={this.state.body} setBody={this.setBody} wep={this.state.weapon} setWep={this.setWep} ammo={this.state.ammo} setAmmo={this.setAmmo} neck={this.state.neck} setNeck={this.setNeck} head={this.state.head} setHead={this.setHead} selectedSlot={this.state.selectedSlot} cape={this.state.cape} setCape={this.setCape}/> 
                : this.state.Prayers ? <PrayerPanel selectedPrayers={this.state.selectedPrayers} prayerClick={this.prayerClickHandler}/>
                : this.state.Skills ? <SkillsPanel statsChange={this.statsChangeHandler} username={this.state.username} usernameChange={this.usernameChangeHandler} fetchClick={this.hiscoreFetchHandler} attackLevel={this.state.attackLevel} strengthLevel={this.state.strengthLevel} defenceLevel={this.state.defenceLevel} hitpointsLevel={this.state.hitpointsLevel} rangedLevel={this.state.rangedLevel} prayerLevel={this.state.prayerLevel} mageLevel={this.state.mageLevel}/>
                : this.state.Combat ? <StylesPanel currentSpell={this.state.selectedSpell} selectedStyle1={this.state.selectedStyle1} selectedStyle2={this.state.selectedStyle2} selectedStyle3={this.state.selectedStyle3} selectedStyle4={this.state.selectedStyle4} selectedStyle5={this.state.selectedStyle5} selectHandler={this.onSelectHandler} weapon={this.state.weapon}/>
                : this.state.Potions ? <BoostsPanel selectStr={this.setStrBoost} 
                                                    selectAtt={this.setAttBoost}
                                                    selectDef={this.setDefBoost}
                                                    selectMag={this.setMagBoost}
                                                    selectRang={this.setRanBoost}
                                                    selectOther={this.setOtherBoost}
                                                    str={this.state.strSelectedBoost} 
                                                    att={this.state.attSelectedBoost}
                                                    def={this.state.defSelectedBoost}
                                                    ran={this.state.rangeSelectedBoost}
                                                    mag={this.state.mageSelectedBoost}
                                                    other={this.state.otherSelectedBoost} selectedBoost={this.state.selectedBoost} attackLevel={this.state.attackLevel} strengthLevel={this.state.strengthLevel} defenceLevel={this.state.defenceLevel} rangedLevel={this.state.rangedLevel} mageLevel={this.state.mageLevel} boostedAtt={this.state.boostedAtt} boostedStr={this.state.boostedStr} boostedDef={this.state.boostedDef} boostedMage={this.state.boostedMage} boostedRange={this.state.boostedRange} boostlvl={this.boostStatHandler}/>
                : null }

            </div>
        )
    }
}

export default PlayerInputs