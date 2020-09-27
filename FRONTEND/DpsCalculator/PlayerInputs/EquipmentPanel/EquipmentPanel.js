import React from 'react';

import EquipmentIcon from './EquipmentIcon/EquipmentIcon';
import Modal from './Modal/Modal';

import './EquipmentPanel.css';

class EquipmentPanel extends React.Component {
    state = {
        showModal: false
    }

    modalClickHandler = () => { //hide modal when modal is clicked
        this.setState({
            showModal: false
        })
    }

    iconClickHandler = () => { //show modal when icon clicked
        this.setState({
            showModal: true
        })
    }

    render() {
        return (
            <div className="equipmentpanel">
                {this.state.showModal ? <Modal click={this.modalClickHandler}/> : null }
                <div className="equipmentrow">
                    <EquipmentIcon type="head_slot" click={this.iconClickHandler}/>
                </div>
                <div className="equipmentrow">
                    <EquipmentIcon type="cape_slot" narrow={true} click={this.iconClickHandler}/> <EquipmentIcon type="neck_slot" narrow={true} click={this.iconClickHandler}/> <EquipmentIcon type="ammo_slot" narrow={true} click={this.iconClickHandler}/>
                </div>
                <div className="equipmentrow">
                    <EquipmentIcon type="weapon_slot" click={this.iconClickHandler}/> <EquipmentIcon type="body_slot" click={this.iconClickHandler}/> <EquipmentIcon type="shield_slot" click={this.iconClickHandler}/>
                </div>
                <div className="equipmentrow">
                    <EquipmentIcon type="legs_slot" click={this.iconClickHandler}/>
                </div>
                <div className="equipmentrow">
                    <EquipmentIcon type="hands_slot" click={this.iconClickHandler}/> <EquipmentIcon type="feet_slot" click={this.iconClickHandler}/> <EquipmentIcon type="ring_slot" click={this.iconClickHandler}/>
                </div>

                

            </div>
        )
    }
}

export default EquipmentPanel