import React from 'react';

import SkillEntry from './SkillEntry/SkillEntry';

import './SkillsPanel.css';

const skills = [
    { name: "Attack", value: "attackLevel", rsrc: "fe" },
    { name: "Strength", value: "strengthLevel", rsrc: "1b" },
    { name: "Defence", value: "defenceLevel", rsrc: "b7" },
    { name: "Hitpoints", value: "hitpointsLevel", rsrc: "96" },
    { name: "Ranged", value: "rangedLevel", rsrc: "19" },
    { name: "Magic", value: "mageLevel", rsrc: "5c" },
    { name: "Prayer", value: "prayerLevel", rsrc: "f2" },
    { name: "Mining", value: "miningLevel", rsrc: "4a" }
]

class SkillsPanel extends React.Component {
    state = {
        
    }

    btnClickHandler = () => {
        document.getElementById("loadinghs").style.visibility = "visible";
        fetch("https://cors-anywhere.herokuapp.com/https://secure.runescape.com/m=hiscore_oldschool/index_lite.ws?player=" + this.props.username).then((response) => {
            response.text().then((data) => {
                var rem = data.split(",")
                console.log(rem);
                document.getElementById("loadinghs").style.visibility = "hidden";
                
                this.props.fetchClick( parseInt(rem[3]), parseInt(rem[7]), parseInt(rem[5]), parseInt(rem[9]), parseInt(rem[11]), parseInt(rem[15]), parseInt(rem[13]))

            })
        })
    }

    render() {
        var skillentries = skills.map(skill => {
            return <SkillEntry name={skill.name} rsrc={skill.rsrc} val={this.props[skill.value]} statsChange={this.props.statsChange} v={skill.value} vhp={this.props.vhp} />
        })
        return (
            <div className="skillspanel">
                <div className="usernameheader">Username</div>
                <div className="hiscores-container">
                    <input class="highscores-input" type="text" value={this.props.username} onChange={this.props.usernameChange}></input>
                    <button class="lookupBtn" onClick={this.btnClickHandler}>Lookup</button>
                </div>

                <div className="skills-container">
                    {skillentries}
                </div>

                <div id="loadinghs" className="loading-hiscore">
                    <div className="spinner"></div>
                    Fetching stats, please wait...
                </div>


            </div>
        )
    }
}

export default SkillsPanel