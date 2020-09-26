import React from 'react';
import ReactDOM from 'react-dom';

class DpsCalculator extends React.Component {
    render() {
        return (
            <div style={{marginTop: "50px", border: "1px dashed black", width: "400px"}}>
                Dps calc react code is mounted here
            </div>
        )
    }
}

ReactDOM.render(
    <DpsCalculator />,
    document.getElementById('dpscalc')
);