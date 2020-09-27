import React from 'react';

import EquipmentIcon from './EquipmentIcon/EquipmentIcon';

import './EquipmentPanel.css';

class EquipmentPanel extends React.Component {
    render() {
        return (
            <div className="equipmentpanel">
                <div className="equipmentrow">
                    <EquipmentIcon type="head_slot"/>
                </div>
                <div className="equipmentrow">
                    <EquipmentIcon type="cape_slot" narrow={true}/> <EquipmentIcon type="neck_slot" narrow={true}/> <EquipmentIcon type="ammo_slot" narrow={true}/>
                </div>
                <div className="equipmentrow">
                    <EquipmentIcon type="weapon_slot"/> <EquipmentIcon type="body_slot"/> <EquipmentIcon type="shield_slot"/>
                </div>
                <div className="equipmentrow">
                    <EquipmentIcon type="legs_slot"/>
                </div>
                <div className="equipmentrow">
                    <EquipmentIcon type="hands_slot"/> <EquipmentIcon type="feet_slot"/> <EquipmentIcon type="ring_slot"/>
                </div>

            </div>
        )
    }
}

export default EquipmentPanel