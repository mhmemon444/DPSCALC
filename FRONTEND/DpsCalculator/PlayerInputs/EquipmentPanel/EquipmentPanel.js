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

    render() {
        return (
            <div className="equipmentpanel">
                {this.state.showModal ? <Modal legs={this.props.legs} setLegs={this.props.setLegs} ring={this.props.ring} setRing={this.props.setRing} feet={this.props.feet} setFeet={this.props.setFeet} hands={this.props.hands} setHands={this.props.setHands} shield={this.props.shield} setShield={this.props.setShield} body={this.props.body} setBody={this.props.setBody} wep={this.props.wep} setWep={this.props.setWep} ammo={this.props.ammo} setAmmo={this.props.setAmmo} neck={this.props.neck} setNeck={this.props.setNeck} head={this.props.head} setHead={this.props.setHead} selectedSlot={this.state.selectedSlot} cape={this.props.cape} setCape={this.props.setCape} click={this.modalClickHandler}/> : null }
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