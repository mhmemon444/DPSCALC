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
        spellbook: "regular"
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
        this.setState({cape: capeObj}, () => {
            console.log(this.state)
        })
    }

    setHead = (headObj) => {
        this.setState({head: headObj}, () => {
            console.log(this.state)
        })
    }

    setNeck = (neckObj) => {
        this.setState({neck: neckObj}, () => {
            console.log(this.state)
        })
    }

    setAmmo = (ammoObj) => {
        this.setState({ammo: ammoObj}, () => {
            console.log(this.state)
        })
    }

    setWep = (wepObj) => {
        this.setState({
            weapon: wepObj,
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
        this.setState({body: bodyObj}, () => {
            console.log(this.state)
        })
    }

    setShield = (shieldObj) => {
        this.setState({shield: shieldObj}, () => {
            console.log(this.state)
        })
    }

    setHands = (handsObj) => {
        this.setState({
            hands: handsObj
        }, () => {
            console.log(this.state)
        })
    }

    setFeet = (feetObj) => {
        this.setState({feet: feetObj}, () => {
            console.log(this.state)
        })
    }

    setRing = (ringObj) => {
        this.setState({ring: ringObj}, () => {
            console.log(this.state)
        })
    }

    setLegs = (legsObj) => {
        this.setState({legs: legsObj}, () => {
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
                : this.state.Skills ? <SkillsPanel username={this.state.username} usernameChange={this.usernameChangeHandler} fetchClick={this.hiscoreFetchHandler} attackLevel={this.state.attackLevel} strengthLevel={this.state.strengthLevel} defenceLevel={this.state.defenceLevel} hitpointsLevel={this.state.hitpointsLevel} rangedLevel={this.state.rangedLevel} prayerLevel={this.state.prayerLevel} mageLevel={this.state.mageLevel}/>
                : this.state.Combat ? <StylesPanel currentSpell={this.state.selectedSpell} selectedStyle1={this.state.selectedStyle1} selectedStyle2={this.state.selectedStyle2} selectedStyle3={this.state.selectedStyle3} selectedStyle4={this.state.selectedStyle4} selectedStyle5={this.state.selectedStyle5} selectHandler={this.onSelectHandler} weapon={this.state.weapon}/>
                : this.state.Potions ? <BoostsPanel />
                : null }

            </div>
        )
    }
}

export default PlayerInputs