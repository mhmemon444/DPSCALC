import React from 'react';


import MonsterDropdown from './MonsterDropdown/MonsterDropdown';
import MonsterAttributeRow from './MonsterAttributeRow/MonsterAttributeRow';

import './MonsterAttributes.css';


class MonsterAttributes extends React.Component {
    state = {
        selectedMonster: null
    }

    selectMonsterHandler = (m) => {
        this.setState({
            selectedMonster: m
        }, () => {
            console.log(this.state)
        })
    }

    render() {
        var Hi = (this.state.selectedMonster != null ? (this.state.selectedMonster["Hi"] || 1) : 1);
        var At = (this.state.selectedMonster != null ? (this.state.selectedMonster["At"] || 1) : 1);
        var St = (this.state.selectedMonster != null ? (this.state.selectedMonster["St"] || 1) : 1);
        var De = (this.state.selectedMonster != null ? (this.state.selectedMonster["De"] || 1) : 1);
        var Ma = (this.state.selectedMonster != null ? (this.state.selectedMonster["Ma"] || 1) : 1);
        var Ra = (this.state.selectedMonster != null ? (this.state.selectedMonster["Ra"] || 1) : 1);

        var bs = (this.state.selectedMonster != null ? (this.state.selectedMonster["bs"] || 0) : 0);
        var ba = (this.state.selectedMonster != null ? (this.state.selectedMonster["ba"] || 0) : 0);
        var bm = (this.state.selectedMonster != null ? (this.state.selectedMonster["bm"] || 0) : 0);
        var am = (this.state.selectedMonster != null ? (this.state.selectedMonster["am"] || 0) : 0);
        var ar = (this.state.selectedMonster != null ? (this.state.selectedMonster["ar"] || 0) : 0);
        var br = (this.state.selectedMonster != null ? (this.state.selectedMonster["br"] || 0) : 0);

        var dl = (this.state.selectedMonster != null ? (this.state.selectedMonster["dl"] || 0) : 0);
        var dt = (this.state.selectedMonster != null ? (this.state.selectedMonster["dt"] || 0) : 0);
        var dc = (this.state.selectedMonster != null ? (this.state.selectedMonster["dc"] || 0) : 0);
        var dm = (this.state.selectedMonster != null ? (this.state.selectedMonster["dm"] || 0) : 0);
        var dr = (this.state.selectedMonster != null ? (this.state.selectedMonster["dr"] || 0) : 0);

        return (
            <div className="monster-attributes">
                <div style={{ textAlign: 'center', marginTop: '5px' }}><span className="playerinputstext">Monster Attributes</span></div>
                
                <MonsterDropdown selectedMonster={this.state.selectedMonster} selectMonster={this.selectMonsterHandler}/>
                <MonsterAttributeRow attr="Monster Stats" Hi={Hi} At={At} St={St} De={De} Ma={Ma} Ra={Ra}/>
                <MonsterAttributeRow attr="Offensive Bonuses" bs={bs} ba={ba} bm={bm} am={am} ar={ar} br={br}/>
                <MonsterAttributeRow attr="Defensive Bonuses" dl={dl} dt={dt} dc={dc} dm={dm} dr={dr}/>
            </div>
        )
    }
}

export default MonsterAttributes;