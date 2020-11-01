import React from 'react';

import './IndividualAttribute.css';

const IndividualAttribute = (props) => {
    return (
        <div className="indl-attr">
            <img style={{height: '20px'}} src={props.icon} />
            <div className="attrib-value">{props.attrib}</div>
        </div>
    )
}

export default IndividualAttribute