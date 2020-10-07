import React from 'react';
import EquipmentPanel from './EquipmentPanel/EquipmentPanel';
import PrayerPanel from './PrayerPanel/PrayerPanel';
import SkillsPanel from './SkillsPanel/SkillsPanel';
import './PlayerInputs.css'


import Tab from './Tab/Tab';

const TABS = [
    "Combat",
    "Skills",
    "Equipment",
    "Potions",
    "Prayers"
];

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
        prayerLevel: 99
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
                [tab]: true
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
        this.setState({weapon: wepObj}, () => {
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
        this.setState({hands: handsObj}, () => {
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

                { this.state.Equipment ? <EquipmentPanel legs={this.state.legs} setLegs={this.setLegs} ring={this.state.ring} setRing={this.setRing} feet={this.state.feet} setFeet={this.setFeet} hands={this.state.hands} setHands={this.setHands} shield={this.state.shield} setShield={this.setShield} body={this.state.body} setBody={this.setBody} wep={this.state.weapon} setWep={this.setWep} ammo={this.state.ammo} setAmmo={this.setAmmo} neck={this.state.neck} setNeck={this.setNeck} head={this.state.head} setHead={this.setHead} selectedSlot={this.state.selectedSlot} cape={this.state.cape} setCape={this.setCape}/> 
                : this.state.Prayers ? <PrayerPanel selectedPrayers={this.state.selectedPrayers} prayerClick={this.prayerClickHandler}/>
                : this.state.Skills ? <SkillsPanel username={this.state.username} usernameChange={this.usernameChangeHandler} fetchClick={this.hiscoreFetchHandler} attackLevel={this.state.attackLevel} strengthLevel={this.state.strengthLevel} defenceLevel={this.state.defenceLevel} hitpointsLevel={this.state.hitpointsLevel} rangedLevel={this.state.rangedLevel} prayerLevel={this.state.prayerLevel} mageLevel={this.state.mageLevel}/>
                : null }

            </div>
        )
    }
}

export default PlayerInputs