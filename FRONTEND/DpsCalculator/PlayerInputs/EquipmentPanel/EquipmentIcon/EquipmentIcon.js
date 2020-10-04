import React from 'react';

import './EquipmentIcon.css';

const EquipmentIcon = (props) => {
    var imgSrc = null;
    var imgSrc2 = null
    switch (props.type) {
        case "head_slot":
                imgSrc = "https://oldschool.runescape.wiki/images/3/35/Head_slot.png?b0c39";
            if (props.head != null) {
                imgSrc2 = props.head.icon;
            }
            break;
        case "neck_slot":
            imgSrc = "https://oldschool.runescape.wiki/images/b/b4/Neck_slot.png?5b85d";
            if (props.neck != null) {
                imgSrc2 = props.neck.icon;
            }
            break;
        case "cape_slot":
            imgSrc = "https://oldschool.runescape.wiki/images/b/ba/Cape_slot.png?2cf1e";
            if (props.cape != null) {
                imgSrc2 = props.cape.icon;
            }
            break;
        case "ammo_slot":
            imgSrc = "https://oldschool.runescape.wiki/images/6/64/Ammo_slot.png?95ab9";
            if (props.ammo != null) {
                imgSrc2 = props.ammo.icon;
            }
            break;
        case "weapon_slot":
            imgSrc = "https://oldschool.runescape.wiki/images/d/d1/Weapon_slot.png?ffed1";
            if (props.weapon != null) {
                imgSrc2 = props.weapon.icon;
            }
            break;
        case "body_slot":
            imgSrc = "https://oldschool.runescape.wiki/images/9/9f/Body_slot.png?5e649";
            if (props.body != null) {
                imgSrc2 = props.body.icon;
            }
            break;
        case "shield_slot":
            imgSrc = "https://oldschool.runescape.wiki/images/d/d9/Shield_slot.png?595b4";
            if (props.shield != null) {
                imgSrc2 = props.shield.icon;
            }
            break;
        case "legs_slot":
            imgSrc = "https://oldschool.runescape.wiki/images/2/25/Legs_slot.png?d132b";
            if (props.legs != null) {
                imgSrc2 = props.legs.icon;
            }
            break;
        case "hands_slot":
            imgSrc = "https://oldschool.runescape.wiki/images/d/d5/Hands_slot.png?7e1b5";
            if (props.hands != null) {
                imgSrc2 = props.hands.icon;
            }
            break;
        case "feet_slot":
            imgSrc = "https://oldschool.runescape.wiki/images/8/84/Feet_slot.png?93de2";
            if (props.feet != null) {
                imgSrc2 = props.feet.icon;
            }
            break;
        case "ring_slot":
            imgSrc = "https://oldschool.runescape.wiki/images/9/9f/Ring_slot.png?37dd8";
            if (props.ring != null) {
                imgSrc2 = props.ring.icon;
            }
            break;
    }

    return (
        <div className={props.narrow ? "equipmenticon-narrow" : "equipmenticon"} onClick={() => props.click(props.type)}>
            <img id="equipmenticonimg" src={imgSrc}/>
            {imgSrc2 != null ? <img id="equipmenticonimgSelected" src={imgSrc2}/> : null}
        </div>
    )
}

export default EquipmentIcon