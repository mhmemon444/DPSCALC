import React from 'react';

import AttributeRow from './AttributeRow/AttributeRow';

import './CombatAttributes.css';

class CombatAttributes extends React.Component {
    state = {

    }
    render() {
        return (
            <div className="combat-attributes">
                <div style={{ textAlign: 'center', marginTop: '5px' }}><span className="playerinputstext">Player Combat Attributes</span></div>
                <AttributeRow attr="Offensive" at={this.props.at} al={this.props.al} ac={this.props.ac} am={this.props.am} ar={this.props.ar}/>
                <AttributeRow attr="Defensive" dt={this.props.dt} dl={this.props.dl} dm={this.props.dm} dr={this.props.dr} dc={this.props.dc}/>
                <AttributeRow attr="Other" bs={this.props.bs} br={this.props.br} bm={this.props.bm} pr={this.props.pr}/>
            </div>
        )
    }
}

export default CombatAttributes;