import React from 'react';

import './SkillEntry.css';

const SkillEntry = (props) => {
    // Creating the full path to the skill image:
    const imgFolderPath = "https://oldschool.runescape.wiki/images/";
    const n1 = props.rsrc.charAt(0) + "/";
    const n2 = props.rsrc + "/";
    const extension = props.name + "_icon.png";
    const fullImage = imgFolderPath.concat(n1).concat(n2).concat(extension);
    // `````````````````````````````````````````````

    const changeHandler = (event) => {
        props.statsChange(event.target.value.replace(/\D/,''), props.v);
    }

    return (
        <div className="skill-entry">
            <div className="skill-icon">
                <img src={fullImage}/>
            </div>
            <div className="skill-input-container">
                <input className="skill-input" type="text" value={props.val} onChange={(e) => changeHandler(e)}/>
            </div>
        </div>
    )
}

export default SkillEntry