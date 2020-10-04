import React from 'react';

import EquipmentIcon from './EquipmentIcon/EquipmentIcon';
import Modal from './Modal/Modal';

import './EquipmentPanel.css';

class EquipmentPanel extends React.Component {
    state = {
        showModal: false,
        selectedSlot: null,
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
        ring: null
    }

    modalClickHandler = () => { //hide modal when modal is clicked
        this.setState({
            showModal: false
        })
    }

    iconClickHandler = (type) => { //show modal when icon clicked
        this.setState({
            showModal: true,
            selectedSlot: type
        })
    }

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

    render() {
        return (
            <div className="equipmentpanel">
                {this.state.showModal ? <Modal legs={this.state.legs} setLegs={this.setLegs} ring={this.state.ring} setRing={this.setRing} feet={this.state.feet} setFeet={this.setFeet} hands={this.state.hands} setHands={this.setHands} shield={this.state.shield} setShield={this.setShield} body={this.state.body} setBody={this.setBody} wep={this.state.weapon} setWep={this.setWep} ammo={this.state.ammo} setAmmo={this.setAmmo} neck={this.state.neck} setNeck={this.setNeck} head={this.state.head} setHead={this.setHead} selectedSlot={this.state.selectedSlot} cape={this.state.cape} setCape={this.setCape} click={this.modalClickHandler}/> : null }
                <div className="equipmentrow">
                    <EquipmentIcon head={this.state.head} type="head_slot" click={this.iconClickHandler}/>
                </div>
                <div className="equipmentrow">
                    <EquipmentIcon cape={this.state.cape} type="cape_slot" narrow={true} click={this.iconClickHandler}/> <EquipmentIcon neck={this.state.neck} type="neck_slot" narrow={true} click={this.iconClickHandler}/> <EquipmentIcon ammo={this.state.ammo} type="ammo_slot" narrow={true} click={this.iconClickHandler}/>
                </div>
                <div className="equipmentrow">
                    <EquipmentIcon weapon={this.state.weapon} type="weapon_slot" click={this.iconClickHandler}/> <EquipmentIcon body={this.state.body} type="body_slot" click={this.iconClickHandler}/> <EquipmentIcon shield={this.state.shield} type="shield_slot" click={this.iconClickHandler}/>
                </div>
                <div className="equipmentrow">
                    <EquipmentIcon legs={this.state.legs} type="legs_slot" click={this.iconClickHandler}/>
                </div>
                <div className="equipmentrow">
                    <EquipmentIcon hands={this.state.hands} type="hands_slot" click={this.iconClickHandler}/> <EquipmentIcon feet={this.state.feet} type="feet_slot" click={this.iconClickHandler}/> <EquipmentIcon ring={this.state.ring} type="ring_slot" click={this.iconClickHandler}/>
                </div>

                

            </div>
        )
    }
}

export default EquipmentPanel