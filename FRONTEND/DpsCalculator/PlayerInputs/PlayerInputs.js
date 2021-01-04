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

const COMBAT_STYLE_MAP = {
    slash: "Accurate - Slash",
    axe: "Accurate - Slash",
    blunt: "Accurate - Crush",
    bulwark: "Accurate - Crush",
    claws: "Accurate - Slash",
    polearm: "Shared - Stab",
    pickaxe: "Accurate - Stab",
    scythe: "Accurate - Slash",
    spear: "Shared - Stab",
    spiked: "Accurate - Crush",
    stab: "Accurate - Stab",
    twohanded: "Accurate - Slash",
    whip: "Accurate - Slash",
    bow: "Accurate - Ranged",
    chinchompa: "Accurate - Ranged",
    crossbow: "Accurate - Ranged",
    thrown: "Accurate - Ranged",
    bladedstaff: "Accurate - Stab",
    staff: "Accurate - Crush",
    poweredstaff: "Accurate - Magic",
    polestaff: "Accurate - Crush",
    salamander: "Aggressive - Slash",
    unarmed: "Accurate - Crush"
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
        // selectedPrayers: [

        // ],

        //Selected gear: (transferred to parent component (DpsCalculator))
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
        // attackLevel: 99,
        // strengthLevel: 99,
        // defenceLevel: 99,
        // hitpointsLevel: 99,
        // rangedLevel: 99,
        // mageLevel: 99,
        // prayerLevel: 99,
        // visibleHitpoints: 99,

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
        
        // strSelectedBoost: null,
        // attSelectedBoost: null,
        // defSelectedBoost: null,
        // rangeSelectedBoost: null,
        // mageSelectedBoost: null,
        // otherSelectedBoost: null,
        // boostedRange: 99,
        // boostedDef: 99,
        // boostedStr: 99,
        // boostedMage: 99,
        // boostedAtt: 99
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

    // //Prayer tab
    // prayerClickHandler = (prayerName) => {
    //     var selPrayers = [...(this.state.selectedPrayers)];

    //     if (!selPrayers.includes(prayerName)) {
    //         selPrayers.push(prayerName);
    //         PRAYER_TURNOFF[prayerName].TurnsOff.forEach(t => {
    //             const index = selPrayers.indexOf(t);
    //             if (index > -1) {
    //                 selPrayers.splice(index, 1);
    //             }
    //         })
    //     } else {
    //         const index = selPrayers.indexOf(prayerName);
    //         if (index > -1) {
    //             selPrayers.splice(index, 1);
    //         }
    //     }
    //     this.setState({
    //         selectedPrayers: [...selPrayers]
    //     }, () => {
    //         console.log(this.state)
    //     })
    // }


    //Equipment tab
    setCape = (capeObj) => {
        var previous = this.state.cape;
        this.setState({cape: (capeObj.value == "Nothing") ? null : capeObj}, () => {
            console.log(this.state)
             
            this.props.calcAttributes(this.state.cape, "cape", previous); //update equipment attributes
            this.props.setGear("cape", this.state.cape); //update parent component with selected gear label
        })
    }

    setHead = (headObj) => {
        var previous = this.state.head;
        this.setState({head: (headObj.value == "Nothing") ? null : headObj}, () => {
            console.log(this.state)
            this.props.calcAttributes(this.state.head, "head", previous); //update equipment attributes
            this.props.setGear("head", this.state.head); //update parent component with selected gear label
            
        })
    }

    setNeck = (neckObj) => {
        var previous = this.state.neck;
        this.setState({neck: (neckObj.value == "Nothing") ? null : neckObj}, () => {
            console.log(this.state)
            this.props.calcAttributes(this.state.neck, "neck", previous); //update equipment attributes
            this.props.setGear("neck", this.state.neck); //update parent component with selected gear label
        })
    }

    setAmmo = (ammoObj) => {
        var previous = this.state.ammo;
        this.setState({ammo: (ammoObj.value == "Nothing") ? null : ammoObj}, () => {
            console.log(this.state)
            this.props.calcAttributes(this.state.ammo, "ammo", previous); //update equipment attributes
            this.props.setGear("ammo", this.state.ammo); //update parent component with selected gear label
        })
    }

    setWep = (wepObj) => {
        var previous = this.state.weapon;
        console.log("wepObj.type: ", wepObj.type);

        var sh = this.state.shield;
        if (sh != null) {
            if ("twohanded" in wepObj) {
                sh = null; //turn off 2h wep when shield equipped
                this.props.setGear("shield", sh);
                this.props.calcAttributes(null, "shield", this.state.shield); //update equipment attributes
                
            }
        }

        this.setState({
            weapon: (wepObj.value == "Nothing") ? null : wepObj,
            shield: sh, //if 2h wep selected, remove shield
            selectedStyle1: true,
            selectedStyle2: false,
            selectedStyle3: false,
            selectedStyle4: false,
            selectedStyle5: false,
            selectedOptionName: ATK_STYLE_MAP[wepObj.type],
            selectedSpell: null
        }, () => {
            //console.log(this.state)
            this.props.setGear("weapon", this.state.weapon); //update parent component with selected gear label

            this.props.setCombatStyle(COMBAT_STYLE_MAP[wepObj.type]); //pass style to parent for dps loadout
            this.props.calcAttributes(this.state.weapon, "weapon", previous); //update equipment attributes
        })
    }

    setBody = (bodyObj) => {
        var previous = this.state.body;
        this.setState({body: (bodyObj.value == "Nothing") ? null : bodyObj}, () => {
            console.log(this.state)
            this.props.calcAttributes(this.state.body, "torso", previous); //update equipment attributes
            this.props.setGear("torso", this.state.body); //update parent component with selected gear label
        })
    }

    setShield = (shieldObj) => {
        var previous = this.state.shield;
        var wep = this.state.weapon;
        var set = false;
        if (wep != null) {
            if ("twohanded" in this.state.weapon) {
                wep = null; //turn off 2h wep when shield equipped
                set = true;
                this.props.setGear("weapon", wep);
                this.props.setCombatStyle(COMBAT_STYLE_MAP["unarmed"]); //pass style to parent for dps loadout
                this.props.calcAttributes(null, "weapon", this.state.weapon); //update equipment attributes
            }
        }

        this.setState({
            shield: (shieldObj.value == "Nothing") ? null : shieldObj,
            weapon: wep,
            selectedStyle1: set ? true : this.state.selectedStyle1,
            selectedStyle2: set ? false : this.state.selectedStyle2,
            selectedStyle3: set ? false : this.state.selectedStyle3,
            selectedStyle4: set ? false : this.state.selectedStyle4,
            selectedStyle5: set ? false : this.state.selectedStyle5,
            selectedOptionName: set ? "Punch" : this.state.selectedOptionName,
            selectedSpell: set ? null : this.state.selectedSpell
        }, () => {
            //console.log(this.state)
            console.log("selectedOptionName: ", this.state.selectedOptionName);
            this.props.setGear("shield", this.state.shield); //update parent component with selected gear label
            
            this.props.calcAttributes(this.state.shield, "shield", previous); //update equipment attributes
            
        })
    }

    setHands = (handsObj) => {
        var previous = this.state.hands;
        this.setState({
            hands: (handsObj.value == "Nothing") ? null : handsObj
        }, () => {
            //console.log(this.state)
            this.props.calcAttributes(this.state.hands, "gloves", previous); //update equipment attributes
            this.props.setGear("gloves", this.state.hands); //update parent component with selected gear label
        })
    }

    setFeet = (feetObj) => {
        var previous = this.state.feet;
        this.setState({feet: (feetObj.value == "Nothing") ? null : feetObj}, () => {
            //console.log(this.state)
            this.props.calcAttributes(this.state.feet, "boots", previous); //update equipment attributes
            this.props.setGear("boots", this.state.feet); //update parent component with selected gear label
        })
    }

    setRing = (ringObj) => {
        var previous = this.state.ring;
        this.setState({ring: (ringObj.value == "Nothing") ? null : ringObj}, () => {
            console.log(this.state)
            this.props.calcAttributes(this.state.ring, "ring", previous); //update equipment attributes
            this.props.setGear("ring", this.state.ring); //update parent component with selected gear label
        })
    }

    setLegs = (legsObj) => {
        var previous = this.state.legs;
        this.setState({legs: (legsObj.value == "Nothing") ? null : legsObj}, () => {
            console.log(this.state)
            this.props.calcAttributes(this.state.legs, "legs", previous); //update equipment attributes
            this.props.setGear("legs", this.state.legs); //update parent component with selected gear label
        })
    }


    //Player skills tab
    usernameChangeHandler = (event) => {
        const uName = event.target.value.slice(0, 30);
        this.setState({
            username: uName
        }, () => {
            console.log(this.state)
        })
    }



    
    //Attack styles tab
    onSelectHandler = (selectedOption, selectedName, style) => {
        this.setState({
        selectedStyle1: false,
        selectedStyle2: false,
        selectedStyle3: false,
        selectedStyle4: false,
        selectedStyle5: false,
        [selectedOption]: true,
        selectedOptionName: selectedName,
        openSpellsTab: (selectedName == "Spell" || selectedName == "Spell (Def)") ? true : false
        }, () => {
            if (!(selectedName == 'Spell' || selectedName == 'Spell (Def)')) {
                this.props.setCombatStyle(style); //pass style to parent for dps loadout
            }
        })
    }



    //Spells tab
    selectSpellHandler = (spellName, spellImg, spell) => {
        const spellObj = {
            name: spellName,
            rsrc: spellImg
        }

        this.setState({
            selectedSpell: spellObj, //e.g. selectedSpell: {name: "Fire Blast", rsrc: "((...base64 image code))"}
            openSpellsTab: false //close spellsTab after selecting spell
        }, () => {
            //console.log(this.state)
            
            this.props.setSpell(spell, this.state.selectedOptionName);
            
        })
    }

    spellbookSwapHandler = () => {
        this.setState({
            spellbook: (this.state.spellbook == "regular") ? "ancients" : "regular"
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
                : this.state.Equipment ? <EquipmentPanel setChinDistance={this.props.setChinDistance} checkWildy = {this.props.checkwildy} checkboxClick = {this.props.checkboxClick} legs={this.state.legs} setLegs={this.setLegs} ring={this.state.ring} setRing={this.setRing} feet={this.state.feet} setFeet={this.setFeet} hands={this.state.hands} setHands={this.setHands} shield={this.state.shield} setShield={this.setShield} body={this.state.body} setBody={this.setBody} wep={this.state.weapon} setWep={this.setWep} ammo={this.state.ammo} setAmmo={this.setAmmo} neck={this.state.neck} setNeck={this.setNeck} head={this.state.head} setHead={this.setHead} selectedSlot={this.state.selectedSlot} cape={this.state.cape} setCape={this.setCape}/> 
                : this.state.Prayers ? <PrayerPanel selectedPrayers={this.props.selectedPrayers} prayerClick={this.props.prayerClickHandler}/>
                : this.state.Skills ? <SkillsPanel miningLevel={this.props.miningLevel} vhp={this.props.visibleHitpoints} statsChange={this.props.statsChangeHandler} username={this.state.username} usernameChange={this.usernameChangeHandler} fetchClick={this.props.hiscoreFetchHandler} attackLevel={this.props.attackLevel} strengthLevel={this.props.strengthLevel} defenceLevel={this.props.defenceLevel} hitpointsLevel={this.props.hitpointsLevel} rangedLevel={this.props.rangedLevel} prayerLevel={this.props.prayerLevel} mageLevel={this.props.mageLevel}/>
                : this.state.Combat ? <StylesPanel chargedCheckHandler={this.props.chargedCheckHandler} checkedchargedspell={this.props.checkedchargedspell} currentSpell={this.state.selectedSpell} selectedStyle1={this.state.selectedStyle1} selectedStyle2={this.state.selectedStyle2} selectedStyle3={this.state.selectedStyle3} selectedStyle4={this.state.selectedStyle4} selectedStyle5={this.state.selectedStyle5} selectHandler={this.onSelectHandler} weapon={this.state.weapon}/>
                : this.state.Potions ? <BoostsPanel selectStr={this.props.setStrBoost} 
                                                    selectAtt={this.props.setAttBoost}
                                                    selectDef={this.props.setDefBoost}
                                                    selectMag={this.props.setMagBoost}
                                                    selectRang={this.props.setRanBoost}
                                                    selectOther={this.props.setOtherBoost}
                                                    str={this.props.strSelectedBoost} 
                                                    att={this.props.attSelectedBoost}
                                                    def={this.props.defSelectedBoost}
                                                    ran={this.props.rangeSelectedBoost}
                                                    mag={this.props.mageSelectedBoost}
                                                    other={this.props.otherSelectedBoost} selectedBoost={this.props.selectedBoost} attackLevel={this.props.attackLevel} strengthLevel={this.props.strengthLevel} defenceLevel={this.props.defenceLevel} rangedLevel={this.props.rangedLevel} mageLevel={this.props.mageLevel} boostedAtt={this.props.boostedAtt} boostedStr={this.props.boostedStr} boostedDef={this.props.boostedDef} boostedMage={this.props.boostedMage} boostedRange={this.props.boostedRange} boostlvl={this.props.boostStatHandler}/>
                : null }

            </div>
        )
    }
}

export default PlayerInputs