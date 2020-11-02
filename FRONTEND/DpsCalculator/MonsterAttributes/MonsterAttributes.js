import React from 'react';

import './MonsterAttributes.css';

class MonsterAttributes extends React.Component {
    state = {

    }
    render() {
        return (
            <div className="monster-attributes">
                <div style={{ textAlign: 'center', marginTop: '5px' }}><span className="playerinputstext">Monster Attributes</span></div>
            </div>
        )
    }
}

export default MonsterAttributes;