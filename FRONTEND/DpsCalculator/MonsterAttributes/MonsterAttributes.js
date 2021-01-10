import React from 'react';


import MonsterDropdown from './MonsterDropdown/MonsterDropdown';
import MonsterAttributeRow from './MonsterAttributeRow/MonsterAttributeRow';

import './MonsterAttributes.css';

const DEMON_TYPE = [
    "Abyssal Sire",
    "Abyssal demon",
    "Balfrug Kreeyath",
    "Black demon",
    "Demonic gorilla",
    "Doomion",
    "Nechrya",
    "Greater demon",
    "Holthion",
    "pyrelord",
    "Pyrelord",
    "Jungle demon",
    "Tsutaroth",
    "Lesser demon",
    "Othainian",
    "Skotizo",
    "Tstanon Karlak",
    "Zakl'n Gritch"
]

const LEAFY_TYPE = [
    "Turoth", "turoth", "Kurask", "kurask"
]

const DRAGON_TYPE = [
    "dragon", "Dragon", "Wyvern", "wyvern", "Hydra", "hydra", "Drake", "drake", "Galvek", "galvek", "Wyrm", "wyrm", "Vorkath"
]

const RAIDS_TYPE = [
    "Ice demon", "Chambers of Xeric", "Muttadile", "Skeletal Mystic", "Tekton", "Vanguard", "Vasa Nistirio", "Vespula", "Vespine", "Great Olm", "Challenge Mode"
]


class MonsterAttributes extends React.Component {
    state = {
        selectedMonster: null
    }

    componentDidMount() {
        var lastSelected = localStorage.getItem('MySelectValue') ?? "[]"
          this.setState({
              selectedMonster: lastSelected == "[]" ? null 
                                : JSON.parse(lastSelected).label == "None" ? null 
                                : JSON.parse(lastSelected)
          }, () => {
              console.log(this.state)
          })
    }

    selectMonsterHandler = (m) => {
        if (m.label != "None") {
            DEMON_TYPE.forEach((d) => {
                if ((m.im).includes(d)) {
                    m.cT.push("demon");
                }
            })
            LEAFY_TYPE.forEach((l) => {
                if ((m.im).includes(l)) {
                    m.cT.push("leafy");
                }
            })
            DRAGON_TYPE.forEach((r) => {
                if ((m.im).includes(r) && !((m.im).includes('Revenant'))) {
                    m.cT.push("dragon");
                }
            })
            RAIDS_TYPE.forEach((a) => {
                if ((m.im).includes(a)) {
                    m.cT.push("raids");
                }
            })
        }
        this.setState({
            selectedMonster: m.label == "None" ? null : m
        }, () => {
            console.log(this.state)
            this.props.setMonster(this.state.selectedMonster); //set Monster in parent component to pass to loadout
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