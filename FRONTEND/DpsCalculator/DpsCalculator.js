import React from 'react';
import ReactDOM from 'react-dom';

import PlayerInputs from './PlayerInputs/PlayerInputs';
import CombatAttributes from './CombatAttributes/CombatAttributes';

import './DpsCalculator.css';

class DpsCalculator extends React.Component {
    render() {
        return (
            <div className="calc-overall-layout" style={{marginTop: "50px"}}>
                {/* Dps calc react code is mounted here */}
                <PlayerInputs />
                <CombatAttributes />
            </div>
        )
    }
}

ReactDOM.render(
    <DpsCalculator />,
    document.getElementById('dpscalc')
);