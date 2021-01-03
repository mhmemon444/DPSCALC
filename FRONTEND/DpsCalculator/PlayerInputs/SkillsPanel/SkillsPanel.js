import React from 'react';

import SkillEntry from './SkillEntry/SkillEntry';

import './SkillsPanel.css';

const skills = [
    { name: "Attack", value: "attackLevel", rsrc: "fe", icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZBAMAAAA2x5hQAAAAFVBMVEUAAAAAAAF1e3x6awlGPC+0qwZVXFpfKXj9AAAAAXRSTlMAQObYZgAAAGJJREFUeF61zMENgCAQRFG2Awa0AInxjoQCVDowNGD/RWhMcNaDR+f28pMxnMAquaAkQcvdYhr+TNMrHd9pbUkANz5Jcp2v1JTyzkNBqpGH2DIlXUkUyuIpX6DURwvwBIY7AZisDOeMoOV7AAAAAElFTkSuQmCC" },
    { name: "Strength", value: "strengthLevel", rsrc: "1b", icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAUAgMAAAD5DFXkAAAADFBMVEUAAADBpHYAAAFGPC8vY/5LAAAAAXRSTlMAQObYZgAAAFZJREFUeNptxLENgCAQQNEfOgah0H3I2UHpAkQaE5a43sbEicDGMbDV2PuKByPAfoDRCnaRwhAk4uTKaOo32ltFwzPhJGSsbydG+ozxKYKuX2kD9eWvFzLeIDMONgdXAAAAAElFTkSuQmCC"  },
    { name: "Defence", value: "defenceLevel", rsrc: "b7", icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAATBAMAAACEi/vCAAAAD1BMVEUAAACSmpV1e3xVXFoAAAHBAcSuAAAAAXRSTlMAQObYZgAAAEhJREFUeNpjcIECBwZnY2MlJUVBQRDLSElJCcpScSGGZQI2BBeLSFNYICwRBgYGZ7ALHBgYGFhArgIJgQXBQgwMLC4uLgwMDADuqxzhpiA+7QAAAABJRU5ErkJggg==" },
    { name: "Hitpoints", value: "hitpointsLevel", rsrc: "96", icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAUBAMAAACUkLs9AAAAD1BMVEUAAADdTwEAAAF6PQmzOQNfjd9/AAAAAXRSTlMAQObYZgAAAGRJREFUeF6Vz9EJwCAMRdGHGwQ6gL46gZmgNPvP1NRo6G/zIVyORARI1n2WJsLKU5Ue4sNuqsNd5tito6KtcMo4viF/grlgVBTLAEq/1qMEQMtbL9mGSWYBQQFBGhAUP9tETngA+e8aT/vsk0QAAAAASUVORK5CYII=" },
    { name: "Ranged", value: "rangedLevel", rsrc: "19", icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXBAMAAAASBMmTAAAAElBMVEUAAAAAAAF6PQl1e3wJbAI1Lxvn8OCVAAAAAXRSTlMAQObYZgAAAJBJREFUeF49jdENwyAMRO82yJEyQL1BEnWASHQA1O4/S88h1F88PfwMApQWXFPEEvFcIBnCbxPKE6BfUgmtBpTdGwptMvBY0tfRWLeEbnEr1oi/Yndwqio5fasO6P7HVwYnfLYJVJWDAx6tZ1AJbO8zg8Vg8T0zeKVVm4HHOKpmj3W/yrSwGobjmHfmzKNzhB+ethFFd5FA4wAAAABJRU5ErkJggg==" },
    { name: "Magic", value: "mageLevel", rsrc: "5c", icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAXBAMAAAAMzfkgAAAAElBMVEUAAAAbBpIAAAEABv56PQm0qwYDZfXfAAAAAXRSTlMAQObYZgAAAH1JREFUeF5N0NENAyEMA9CKDVw6wOERklugVRjh9l+lGHqk/iFPcpDgoRQe8/zB/wW3FFEtqw2e1dKAmsIQb1GyLD4btgTYsQXAb5FbipSXNmkvSjhZONfeA1d89BKCEdF7mA+p9op+Vb+lDJiaa5bWC1AFcoiYNv2UuKL5C5gvFkaJ5qUwAAAAAElFTkSuQmCC" },
    { name: "Prayer", value: "prayerLevel", rsrc: "f2", icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXBAMAAAASBMmTAAAAD1BMVEUAAAC2zboAAAHh79eSmpW4ABp2AAAAAXRSTlMAQObYZgAAAGFJREFUeF6N0NEJwCAMBNCQDU46QNQuUDKC7j9TL5a2fgjt/XiPQCDKiMqUan+gtUxo6cXeYEuU3pDs7sQlZe9+UNxYnQnAjZN4MSZMCP3ZAGzRr2TAZAlFkjUkf146/84JpVkMess7DiAAAAAASUVORK5CYII=" },
    { name: "Mining", value: "miningLevel", rsrc: "4a", icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXAgMAAACdRDwzAAAADFBMVEUAAAAAAAF1e3xGPC/Lr9t+AAAAAXRSTlMAQObYZgAAAHdJREFUeF4lyyEOwjAcRvH3mdYiwNRwlf8RJmCOYDCbR5JdoQI0hoSsp+lhakloO/UTLw90NkBjeh4Ml9J6HQivMb0zk2n+Zm4Q1oEdNRvAcWOZI6BfaPjiPi3lDVPjTkO5461zAUVUOr7iYr06i0EwHsAEJ2DPH6zjISwi8knTAAAAAElFTkSuQmCC" }
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
                
                this.props.fetchClick( parseInt(rem[3]), parseInt(rem[7]), parseInt(rem[5]), parseInt(rem[9]), parseInt(rem[11]), parseInt(rem[15]), parseInt(rem[13]), parseInt(rem[31]))

            })
        })
    }

    render() {
        var skillentries = skills.map(skill => {
            return <SkillEntry icon={skill.icon} name={skill.name} rsrc={skill.rsrc} val={this.props[skill.value]} statsChange={this.props.statsChange} v={skill.value} vhp={this.props.vhp} />
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