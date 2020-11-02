import React from 'react';

import './MonsterIndividualAttribute.css';

const MonsterIndividualAttribute = (props) => {
    var sign = parseInt(props.attrib) >= 0 ? "+" : "-";
    return (
        <div className="mon-indl-attr">
            <img style={{height: '16px', paddingRight: '2px'}} src={props.icon} />
            <div className="mon-attrib-value">{props.bonus ? sign : null }{props.attrib}</div>
        </div>
    )
}

export default MonsterIndividualAttribute