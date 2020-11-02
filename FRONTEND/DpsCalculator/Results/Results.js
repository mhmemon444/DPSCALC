import React from 'react';

import './Results.css';


class Results extends React.Component {
    state = {
        
    }


    render() {
        return (
            <div className="results">
                <div style={{ textAlign: 'center', marginTop: '5px' }}><span className="playerinputstext">Results</span></div>
                <div className="result-data" style={{marginTop: "35px"}}>
                    <div className="result-data-header">Max Hit</div>
                    <div className="result-data-val">43</div>
                </div>
                <div className="result-data">
                    <div className="result-data-header">Accuracy</div>
                    <div className="result-data-val">82.75%</div>
                </div>
                <div className="result-data">
                    <div className="result-data-header">Damage per second</div>
                    <div className="result-data-val">5.9304</div>
                </div>
                <div className="result-data">
                    <div className="result-data-header">Average time to kill</div>
                    <div className="result-data-val">56.25 seconds</div>
                </div>
                <div className="result-data">
                    <div className="result-data-header">Average damage taken</div>
                    <div className="result-data-val">18.71</div>
                </div>
            </div>
        )
    }
}

export default Results;