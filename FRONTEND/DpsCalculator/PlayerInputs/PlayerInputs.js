import React from 'react';

import './PlayerInputs.css'

import InputTabs from './InputTabs/InputTabs';

const PlayerInputs = (props) => {
    return (
        <div className="playerinputs">
            <div style={{textAlign: 'center', marginTop: '5px'}}><span className="playerinputstext">Player Inputs</span></div>
            <InputTabs />
        </div>
    )
}

export default PlayerInputs