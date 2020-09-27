import React from 'react';

import './EquipmentIcon.css';

const EquipmentIcon = (props) => {
    var imgSrc = null;
    switch (props.type) {
        case "head_slot":
            imgSrc = "https://oldschool.runescape.wiki/images/3/35/Head_slot.png?b0c39";
            break;
        case "neck_slot":
            imgSrc = "https://oldschool.runescape.wiki/images/b/b4/Neck_slot.png?5b85d";
            break;
        case "cape_slot":
            imgSrc = "https://oldschool.runescape.wiki/images/b/ba/Cape_slot.png?2cf1e";
            break;
        case "ammo_slot":
            imgSrc = "https://oldschool.runescape.wiki/images/6/64/Ammo_slot.png?95ab9";
            break;
        case "weapon_slot":
            imgSrc = "https://oldschool.runescape.wiki/images/d/d1/Weapon_slot.png?ffed1";
            break;
        case "body_slot":
            imgSrc = "https://oldschool.runescape.wiki/images/9/9f/Body_slot.png?5e649";
            break;
        case "shield_slot":
            imgSrc = "https://oldschool.runescape.wiki/images/d/d9/Shield_slot.png?595b4";
            break;
        case "legs_slot":
            imgSrc = "https://oldschool.runescape.wiki/images/2/25/Legs_slot.png?d132b";
            break;
        case "hands_slot":
            imgSrc = "https://oldschool.runescape.wiki/images/d/d5/Hands_slot.png?7e1b5";
            break;
        case "feet_slot":
            imgSrc = "https://oldschool.runescape.wiki/images/8/84/Feet_slot.png?93de2";
            break;
        case "ring_slot":
            imgSrc = "https://oldschool.runescape.wiki/images/9/9f/Ring_slot.png?37dd8";
            break;
    }

    return (
        <div className={props.narrow ? "equipmenticon-narrow" : "equipmenticon"}>
            <img id="equipmenticonimg" src={imgSrc}/>
        </div>
    )
}

export default EquipmentIcon