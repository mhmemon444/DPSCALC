import React from 'react';

import ReactTooltip from "react-tooltip";

import './SpellIcon.css';

const SpellIcon = (props) => {

    var imgClassName = null;
    var confirmSpell = true;
    if (props.special) {
        imgClassName = !((props.staff).includes(props.equippedStaff.label)) ? "hidespell" : null
        confirmSpell = !((props.staff).includes(props.equippedStaff.label)) ? false : true; //prevent selecting blocked spells
    }

    const handleSelect = (name, rsrc, conf, s) => {
        if (conf == false) {
            return;
        } else {
            props.select(name, rsrc, s);
        }
    }

    return (
        <>
        <div className="spell-entry" >
            <div id={confirmSpell ? "spell-hovericon" : null} onClick={() => handleSelect(props.name, props.rsrc, confirmSpell, props.spell)}>
                <img data-tip data-for={props.name}
                    className={imgClassName}
                    src={props.rsrc}
                />
            </div>

        </div>
        <ReactTooltip id={props.name} place="top" effect="solid">
             <span style={{fontFamily: 'Calibri, Arial, serif'}}>{props.name}</span>
        </ReactTooltip>
        </>
    )

}

export default SpellIcon