import React from 'react';

import './SpellIcon.css';

const SpellIcon = (props) => {

    var imgClassName = null;
    var confirmSpell = true;
    if (props.special) {
        imgClassName = !((props.staff).includes(props.equippedStaff.label)) ? "hidespell" : null
        confirmSpell = !((props.staff).includes(props.equippedStaff.label)) ? false : true; //prevent selecting blocked spells
    }

    const handleSelect = (name, rsrc, conf) => {
        if (conf == false) {
            return;
        } else {
            props.select(name, rsrc);
        }
    }

    return (
        <div className="spell-entry" >
            <div id={confirmSpell ? "spell-hovericon" : null} onClick={() => handleSelect(props.name, props.rsrc, confirmSpell)}>
                <img
                    className={imgClassName}
                    src={props.rsrc}
                />
            </div>

        </div>
    )

}

export default SpellIcon