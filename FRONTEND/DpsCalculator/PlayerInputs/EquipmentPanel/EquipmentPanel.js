import React from 'react';

import EquipmentIcon from './EquipmentIcon/EquipmentIcon';
import Modal from './Modal/Modal';

import './EquipmentPanel.css';

class EquipmentPanel extends React.Component {
    state = {
        showModal: false,
        selectedSlot: null
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

    setHeadHandler = (obj) => {
        this.setState({
            showModal: false
        }, () => {
            this.props.setHead(obj);
        })
    }

    setNeckHandler = (obj) => {
        this.setState({
            showModal: false
        }, () => {
            this.props.setNeck(obj);
        })
    }

    setCapeHandler = (obj) => {
        this.setState({
            showModal: false
        }, () => {
            this.props.setCape(obj);
        })
    }

    setAmmoHandler = (obj) => {
        this.setState({
            showModal: false
        }, () => {
            this.props.setAmmo(obj);
        })
    }

    setWepHandler = (obj) => {
        this.setState({
            showModal: false
        }, () => {
            this.props.setWep(obj);
        })
    }

    setBodyHandler = (obj) => {
        this.setState({
            showModal: false
        }, () => {
            this.props.setBody(obj);
        })
    }

    setShieldHandler = (obj) => {
        this.setState({
            showModal: false
        }, () => {
            this.props.setShield(obj);
        })
    }

    setLegsHandler = (obj) => {
        this.setState({
            showModal: false
        }, () => {
            this.props.setLegs(obj);
        })
    }

    setHandsHandler = (obj) => {
        this.setState({
            showModal: false
        }, () => {
            this.props.setHands(obj);
        })
    }

    setFeetHandler = (obj) => {
        this.setState({
            showModal: false
        }, () => {
            this.props.setFeet(obj);
        })
    }

    setRingHandler = (obj) => {
        this.setState({
            showModal: false
        }, () => {
            this.props.setRing(obj);
        })
    }

    render() {
        return (
            <div className="equipmentpanel">
                {this.state.showModal ? <Modal legs={this.props.legs} setLegs={this.setLegsHandler} ring={this.props.ring} setRing={this.setRingHandler} feet={this.props.feet} setFeet={this.setFeetHandler} hands={this.props.hands} setHands={this.setHandsHandler} shield={this.props.shield} setShield={this.setShieldHandler} body={this.props.body} setBody={this.setBodyHandler} wep={this.props.wep} setWep={this.setWepHandler} ammo={this.props.ammo} setAmmo={this.setAmmoHandler} neck={this.props.neck} setNeck={this.setNeckHandler} head={this.props.head} setHead={this.setHeadHandler} selectedSlot={this.state.selectedSlot} cape={this.props.cape} setCape={this.setCapeHandler} click={this.modalClickHandler}/> : null }
                <div className="equipmentrow">
                    <EquipmentIcon head={this.props.head} type="head_slot" click={this.iconClickHandler}/>
                </div>
                <div className="equipmentrow">
                    <EquipmentIcon cape={this.props.cape} type="cape_slot" narrow={true} click={this.iconClickHandler}/> <EquipmentIcon neck={this.props.neck} type="neck_slot" narrow={true} click={this.iconClickHandler}/> <EquipmentIcon ammo={this.props.ammo} type="ammo_slot" narrow={true} click={this.iconClickHandler}/>
                </div>
                <div className="equipmentrow">
                    <EquipmentIcon weapon={this.props.wep} type="weapon_slot" click={this.iconClickHandler}/> <EquipmentIcon body={this.props.body} type="body_slot" click={this.iconClickHandler}/> <EquipmentIcon shield={this.props.shield} type="shield_slot" click={this.iconClickHandler}/>
                </div>
                <div className="equipmentrow">
                    <EquipmentIcon legs={this.props.legs} type="legs_slot" click={this.iconClickHandler}/>
                </div>
                <div className="equipmentrow">
                    <EquipmentIcon hands={this.props.hands} type="hands_slot" click={this.iconClickHandler}/> <EquipmentIcon feet={this.props.feet} type="feet_slot" click={this.iconClickHandler}/> <EquipmentIcon ring={this.props.ring} type="ring_slot" click={this.iconClickHandler}/>
                </div>

                

            </div>
        )
    }
}

export default EquipmentPanel