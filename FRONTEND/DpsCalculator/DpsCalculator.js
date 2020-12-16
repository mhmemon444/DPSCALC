import React from 'react';
import ReactDOM from 'react-dom';

import PlayerInputs from './PlayerInputs/PlayerInputs';
import CombatAttributes from './CombatAttributes/CombatAttributes';
import MonsterAttributes from './MonsterAttributes/MonsterAttributes';
import Results from './Results/Results';

import * as attributes from './dpsattributes';
import calc from './utils/calc';

import './DpsCalculator.css';

class DpsCalculator extends React.Component {
    state = {
        //Selected gear: (transferred to parent component (DpsCalculator))
        equipment: {
            cape: null,
            head: null,
            neck: null,
            ammo: null,
            weapon: null,
            torso: null,
            shield: null,
            legs: null,
            gloves: null,
            boots: null,
            ring: null
        },

        //Selected Monster:
        monster: {
            cT: ["null"]
        },

        //Selected spell:
        spell: null,
        

        //Equipment Bonuses
        stabBonus: 0,
        slashBonus: 0,
        crushBonus: 0,
        mageBonus: 0,
        rangedBonus: 0,
        strengthBonus: 0,
        stabDef: 0,
        slashDef: 0,
        crushDef: 0,
        mageDef: 0,
        rangedDef: 0,
        strengthDef: 0,
        rangedStrengthBonus: 0,
        mageStrengthBonus: 0,
        prayerBonus: 0
    }

    setGear = (type, gear) => {
        var e = {...this.state.equipment};
        e[type] = gear;
        this.setState({
            equipment: e
        }, () => {
            // console.log("Set Gear");
            // console.log(this.state);
            // console.log("MVOID::::");
            
        })
    }

    setMonster = (m) => {
        this.setState({
            monster: m
        })
    }

    setSpell = (s) => {
        this.setState({
            spell: s
        }, () => {
            
        })
    }

    calculateAttributeBonusHandler = (item, type, previous) => {
        // console.log( (attributes.equipment)[type][item] );

        this.setState({
            stabBonus: this.state.stabBonus + (item == null ? 0 : (attributes.equipment)[type][item.label]["at"]) - (previous == null ? 0 : (attributes.equipment)[type][previous.label]["at"]),
            slashBonus: this.state.slashBonus + (item == null ? 0 : (attributes.equipment)[type][item.label]["al"]) - (previous == null ? 0 : (attributes.equipment)[type][previous.label]["al"]),
            crushBonus: this.state.crushBonus + (item == null ? 0 : (attributes.equipment)[type][item.label]["ac"]) - (previous == null ? 0 : (attributes.equipment)[type][previous.label]["ac"]),
            mageBonus: this.state.mageBonus + (item == null ? 0 : (attributes.equipment)[type][item.label]["am"]) - (previous == null ? 0 : (attributes.equipment)[type][previous.label]["am"]),
            rangedBonus: this.state.rangedBonus + (item == null ? 0 : (attributes.equipment)[type][item.label]["ar"]) - (previous == null ? 0 : (attributes.equipment)[type][previous.label]["ar"]),
            strengthBonus: this.state.strengthBonus + (item == null ? 0 : (attributes.equipment)[type][item.label]["bs"]) - (previous == null ? 0 : (attributes.equipment)[type][previous.label]["bs"]),
            rangedStrengthBonus: this.state.rangedStrengthBonus + (item == null ? 0 : (attributes.equipment)[type][item.label]["br"]) - (previous == null ? 0 : (attributes.equipment)[type][previous.label]["br"]),
            mageStrengthBonus: this.state.mageStrengthBonus + (item == null ? 0 : (attributes.equipment)[type][item.label]["bm"]) - (previous == null ? 0 : (attributes.equipment)[type][previous.label]["bm"]),
            prayerBonus: this.state.prayerBonus + (item == null ? 0 : (attributes.equipment)[type][item.label]["pr"]) - (previous == null ? 0 : (attributes.equipment)[type][previous.label]["pr"]),
            slashDef: this.state.slashDef + (item == null ? 0 : (attributes.equipment)[type][item.label]["dl"]) - (previous == null ? 0 : (attributes.equipment)[type][previous.label]["dl"]),
            stabDef: this.state.stabDef + (item == null ? 0 : (attributes.equipment)[type][item.label]["dt"]) - (previous == null ? 0 : (attributes.equipment)[type][previous.label]["dt"]),
            crushDef: this.state.crushDef + (item == null ? 0 : (attributes.equipment)[type][item.label]["dc"]) - (previous == null ? 0 : (attributes.equipment)[type][previous.label]["dc"]),
            mageDef: this.state.mageDef + (item == null ? 0 : (attributes.equipment)[type][item.label]["dm"]) - (previous == null ? 0 : (attributes.equipment)[type][previous.label]["dm"]),
            rangedDef: this.state.rangedDef + (item == null ? 0 : (attributes.equipment)[type][item.label]["dr"]) - (previous == null ? 0 : (attributes.equipment)[type][previous.label]["dr"])
        }, () => {
            console.log(this.state)
        })
    }

    componentDidMount() {
        //console.log(calc);
    }



    render() {
        return (
            <div className="calc-overall-layout" style={{marginTop: "50px"}}>
                {/* Dps calc react code is mounted here */}
                <PlayerInputs setSpell={this.setSpell} setGear={this.setGear} calcAttributes={this.calculateAttributeBonusHandler}/>
                <CombatAttributes dr={this.state.rangedDef} dm={this.state.mageDef} dc={this.state.crushDef} dt={this.state.stabDef} dl={this.state.slashDef} at={this.state.stabBonus} al={this.state.slashBonus} ac={this.state.crushBonus} am={this.state.mageBonus} ar={this.state.rangedBonus} bs={this.state.strengthBonus} br={this.state.rangedStrengthBonus} bm={this.state.mageStrengthBonus} pr={this.state.prayerBonus}/>
                <MonsterAttributes setMonster={this.setMonster}/>
                <Results />
            </div>
        )
    }
}

ReactDOM.render(
    <DpsCalculator />,
    document.getElementById('dpscalc')
);