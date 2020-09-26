import React from 'react';

import './InputTabs.css';

import Tab from './Tab/Tab';

// https://oldschool.runescape.wiki/images/8/8f/Combat_icon.png?93d63
// https://oldschool.runescape.wiki/images/a/a3/Skills_icon.png?a8e9f
// https://oldschool.runescape.wiki/images/5/50/Worn_equipment.png?124cf
// https://oldschool.runescape.wiki/images/a/ae/Attack_potion%284%29.png?ab5d5
// https://oldschool.runescape.wiki/images/f/f2/Prayer_icon.png?ca0dc

const TABS = [
    "Combat",
    "Skills",
    "Equipment",
    "Potions",
    "Prayers"
];

const InputTabs = () => {
    const tabs = TABS.map(tabType => {
        return <Tab type={tabType}/>
    })

    return (
        <div className="inputTabs">
            {tabs}
        </div>
    )
}

export default InputTabs