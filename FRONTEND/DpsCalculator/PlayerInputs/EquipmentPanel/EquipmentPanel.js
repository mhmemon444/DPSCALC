import React from 'react';

import EquipmentIcon from './EquipmentIcon/EquipmentIcon';
import Modal from './Modal/Modal';
import Checkbox from './Checkbox/Checkbox';

import './EquipmentPanel.css';

const WILDY_WEPS = ["Craw's bow", "Thammaron's sceptre", "Viggora's chainmace"];

class EquipmentPanel extends React.Component {
    state = {
        showModal: false,
        selectedSlot: null,

        //check chinchompa:
        checkeddistance_three: true,
        checkeddistance_six: false,
        checkeddistance_seven: false
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

    //chinchompa checkboxes
    checkboxClickHandler = (e, n) => {
        this.setState({
            checkeddistance_seven: false,
            checkeddistance_six: false,
            checkeddistance_three: false,
            [n]: true
        }, () => {
            var d;
            if (this.state.checkeddistance_seven) {
                d = 7;
            } else if (this.state.checkeddistance_six) {
                d = 6;
            } else if (this.state.checkeddistance_three) {
                d = 3;
            }
            this.props.setChinDistance(d);
        })
    }

    render() {
        var checkWildy = null;
        if (this.props.wep && WILDY_WEPS.includes(this.props.wep.label)) {
            checkWildy = (
                <>
                <div className="chkwbox">
                    <Checkbox type="wildy" height="20px" checked={this.props.checkWildy} checkboxClickHandler={this.props.checkboxClick}/>
                </div>
                <div className='chkwildy'>
                    <span>Using {this.props.wep.label} in Wilderness?</span>
                </div>
                </>
            )
        }

        var checkChinchompa = null;
        if (this.props.wep && (this.props.wep.label).includes("inchompa")) {
            checkChinchompa = (
                // <>
                // <div className="chkchin">
                //     <Checkbox type="wildy" height="20px" checked={this.props.checkWildy} checkboxClickHandler={this.props.checkboxClick}/>
                // </div>
                // <div className='chkwildy'>
                //     <span>Using {this.props.wep.label} in Wilderness?</span>
                // </div>
                // </>
                <div className="checkChin">
                    <span style={{fontWeight: 'bold', marginBottom: '5px'}}>Distance from target</span>
                    <div className="chin_radiobtn">
                    <Checkbox type="distance_three" height="20px" checked={this.state.checkeddistance_three} checkboxClickHandler={this.checkboxClickHandler}/>
                        <div style={{marginLeft: '5px'}}>less than 3 tiles</div>
                    </div>
                    <div className="chin_radiobtn">
                    <Checkbox type="distance_six" height="20px" checked={this.state.checkeddistance_six} checkboxClickHandler={this.checkboxClickHandler}/>
                        <div style={{marginLeft: '5px'}}>4 to 6 tiles</div>
                    </div>
                    <div className="chin_radiobtn">
                    <Checkbox type="distance_seven" height="20px" checked={this.state.checkeddistance_seven} checkboxClickHandler={this.checkboxClickHandler}/>
                        <div style={{marginLeft: '5px'}}>7+ tiles</div>
                    </div>
                </div>
            )
        }
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

                {checkWildy}
                {checkChinchompa}

                

            </div>
        )
    }
}

export default EquipmentPanel