import React from 'react';

import './Tab.css'

const Tab = (props) => {

    var imgSrc = null;
    switch (props.type) {
        case "Combat":
            imgSrc = "https://oldschool.runescape.wiki/images/8/8f/Combat_icon.png?93d63";
            break;
        case "Skills":
            imgSrc = "https://oldschool.runescape.wiki/images/a/a3/Skills_icon.png?a8e9f";
            break;
        case "Equipment":
            imgSrc = "https://oldschool.runescape.wiki/images/5/50/Worn_equipment.png?124cf";
            break;
        case "Potions":
            imgSrc = "https://oldschool.runescape.wiki/images/a/ae/Attack_potion%284%29.png?ab5d5";
            break;
        case "Prayers":
            imgSrc = "https://oldschool.runescape.wiki/images/f/f2/Prayer_icon.png?ca0dc";
            break;
    }

    return (
        <div className={props.selected ? "tabSelected" : "tab"} onClick={() => props.click(props.type)}>
            <img src={imgSrc} />
        </div>
    )
}

export default Tab