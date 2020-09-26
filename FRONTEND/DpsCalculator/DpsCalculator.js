import React from 'react';
import ReactDOM from 'react-dom';

import PlayerInputs from './PlayerInputs/PlayerInputs'

class DpsCalculator extends React.Component {
    render() {
        return (
            <div style={{marginTop: "50px"}}>
                {/* Dps calc react code is mounted here */}
                <PlayerInputs />
            </div>
        )
    }
}

ReactDOM.render(
    <DpsCalculator />,
    document.getElementById('dpscalc')
);