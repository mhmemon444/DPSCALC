import React from 'react';

import IndividualBoost from './IndividualBoost/IndividualBoost';
import BoostsModal from './BoostsModal/BoostsModal';

import './BoostsPanel.css';

const INDIVIDUAL_BOOSTS = [
    {selectedState: "boostedStr", type: "str", name: "strengthLevel", icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAUAgMAAAD5DFXkAAAADFBMVEUAAADBpHYAAAFGPC8vY/5LAAAAAXRSTlMAQObYZgAAAFZJREFUeNptxLENgCAQQNEfOgah0H3I2UHpAkQaE5a43sbEicDGMbDV2PuKByPAfoDRCnaRwhAk4uTKaOo32ltFwzPhJGSsbydG+ozxKYKuX2kD9eWvFzLeIDMONgdXAAAAAElFTkSuQmCC"},
    {selectedState: "boostedAtt", type: "att", name: "attackLevel", icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZBAMAAAA2x5hQAAAAFVBMVEUAAAAAAAF1e3x6awlGPC+0qwZVXFpfKXj9AAAAAXRSTlMAQObYZgAAAGJJREFUeF61zMENgCAQRFG2Awa0AInxjoQCVDowNGD/RWhMcNaDR+f28pMxnMAquaAkQcvdYhr+TNMrHd9pbUkANz5Jcp2v1JTyzkNBqpGH2DIlXUkUyuIpX6DURwvwBIY7AZisDOeMoOV7AAAAAElFTkSuQmCC"},
    {selectedState: "boostedDef", type: "def", name: "defenceLevel", icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAATBAMAAACEi/vCAAAAD1BMVEUAAACSmpV1e3xVXFoAAAHBAcSuAAAAAXRSTlMAQObYZgAAAEhJREFUeNpjcIECBwZnY2MlJUVBQRDLSElJCcpScSGGZQI2BBeLSFNYICwRBgYGZ7ALHBgYGFhArgIJgQXBQgwMLC4uLgwMDADuqxzhpiA+7QAAAABJRU5ErkJggg=="},
    {selectedState: "boostedRange", type: "ran", name: "rangedLevel", icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXBAMAAAASBMmTAAAAElBMVEUAAAAAAAF6PQl1e3wJbAI1Lxvn8OCVAAAAAXRSTlMAQObYZgAAAJBJREFUeF49jdENwyAMRO82yJEyQL1BEnWASHQA1O4/S88h1F88PfwMApQWXFPEEvFcIBnCbxPKE6BfUgmtBpTdGwptMvBY0tfRWLeEbnEr1oi/Yndwqio5fasO6P7HVwYnfLYJVJWDAx6tZ1AJbO8zg8Vg8T0zeKVVm4HHOKpmj3W/yrSwGobjmHfmzKNzhB+ethFFd5FA4wAAAABJRU5ErkJggg=="},
    {selectedState: "boostedMage", type: "mag", name: "mageLevel", icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAXBAMAAAAMzfkgAAAAElBMVEUAAAAbBpIAAAEABv56PQm0qwYDZfXfAAAAAXRSTlMAQObYZgAAAH1JREFUeF5N0NENAyEMA9CKDVw6wOERklugVRjh9l+lGHqk/iFPcpDgoRQe8/zB/wW3FFEtqw2e1dKAmsIQb1GyLD4btgTYsQXAb5FbipSXNmkvSjhZONfeA1d89BKCEdF7mA+p9op+Vb+lDJiaa5bWC1AFcoiYNv2UuKL5C5gvFkaJ5qUwAAAAAElFTkSuQmCC"}
]

const vialImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAeCAMAAAD0DqVnAAABTVBMVEUAAACzs7Wzs7OxsrOqqq25qFW2pVSxoVGvn1Cqmk18fHx7e3uKfj96ent5enp5eXp4eHmHez53d3h2dnd2dnZ1dXaEeDx0dHZzdHVzc3SCdjtycnRxcXNxcXJwcHJ/czlvb3Fub3FubnBtbW9sbW9sbG5ra21qam1qamxpaWxoaGt1azZnaGpmZmllZWhkZWhyZzRkZGdjY2diYmZvZTNhYmVgYWRfX2NsYjFeX2JeXmJcXGBbXGBaW19ZWl5ZWV5YWF1XV1xWV1xVVltUVVpUVFlTVFleVStSUlhRUldQUVdPUFZPT1VOT1RMTVJLTFJKS1FKSlBJSk9ISU5HSE1HR0xGR0tERUpDRElCQ0dCQkdLRCFBQUZAQEU/P0Q+PkM9PUI7PEA6Oz85Oj44OT03ODw2Nzs1Njo1NTkzMzcyMzYsLDAnKComJikAAAEJNgHRAAAAAXRSTlMAQObYZgAAAUNJREFUeAEFwUuOjkEUANBT33d/WpP2DjMzI7ZWi6mBXRgI5iSdWIA1YEDiGbr7r1vXOQHQMQAC0F89vP+gD0AAfP7i2pM+gABo2uEAEEBHO4Q+QID+cWot4uvsAwL45Tm3T/7dAQL4rbi7nZ4CAfwk9u305gYEGP1Ftvbsxg0DBODpp6NtGUAAfq99SYAA/NpqX+uyDxCgv22auRIQ0D9836ynOfOqDwjwDVvNzAQC/fwPZK65X/WBgB+rUbVmrgRBf/+vKS1zZuaxDwJ/Z6tG1czjngeE/u6CRlVlrpzHPgSXVxtWW5mZM/JA9POrRtlUrZx75kUf4eKilUatXDPyuAfhclsN1apqzn3l3HuM/nJjaVZVzsjtZB/BYamm1Mrcrp/dakMY3ZuqVVVVZ7funRgEQ+d1rarHZ48MCBh0YAD/AXyTtZ9lHAfMAAAAAElFTkSuQmCC"

class BoostsPanel extends React.Component {
    state = {
        showModal: false,
        selectedBoost: null
    }

    modalClickHandler = () => { //hide modal when modal is clicked
        this.setState({
            showModal: false
        })
    }

    slotClickHandler = (type) => { //show modal when slot clicked
        this.setState({
            showModal: true,
            selectedBoost: type
        }, () => {
            console.log(this.state)
        })
    }

    boostStrHandler = (boost) => {
        this.setState({
            showModal: false
        }, () => {
            this.props.selectStr(boost);
        })
    }

    boostAttHandler = (boost) => {
        this.setState({
            showModal: false
        }, () => {
            this.props.selectAtt(boost);
        })
    }

    boostDefHandler = (boost) => {
        this.setState({
            showModal: false
        }, () => {
            this.props.selectDef(boost);
        })
    }

    boostMagHandler = (boost) => {
        this.setState({
            showModal: false
        }, () => {
            this.props.selectMag(boost);
        })
    }

    boostRangHandler = (boost) => {
        this.setState({
            showModal: false
        }, () => {
            this.props.selectRang(boost);
        })
    }

    boostOtherHandler = (boost) => {
        this.setState({
            showModal: false
        }, () => {
            this.props.selectOther(boost);
        })
    }



    

    render() {
        var boostTabs = INDIVIDUAL_BOOSTS.map(b => {
            return <IndividualBoost icon={b.icon} level={this.props[b.name]} click={this.slotClickHandler} type={b.type} selected={this.props[b.type]} boostedLevel={this.props[b.selectedState]} />
        })
        return (
            <div style={{position: "relative"}}>
                {this.state.showModal ? <BoostsModal click={this.modalClickHandler} 
                                                     selectStr={this.boostStrHandler}
                                                     selectAtt={this.boostAttHandler}
                                                     selectDef={this.boostDefHandler}
                                                     selectMag={this.boostMagHandler}
                                                     selectRang={this.boostRangHandler}
                                                     selectOther={this.boostOtherHandler}
                                                     str={this.props.str} 
                                                     att={this.props.att}
                                                     def={this.props.def}
                                                     ran={this.props.ran}
                                                     mag={this.props.mag}
                                                     other={this.props.other}
                                                     selectedBoost={this.state.selectedBoost}
                                                    />
                                                    : null }
                {boostTabs}
                <div className="individualBoost" onClick={() => this.slotClickHandler("other")}>
                    <span className="otherlevelboost">Other Boosts</span>
                    <img className="vialimg" style={{height: (this.props.other != null && this.props.other.label == "Garden pie") ? 18 : 25}} src={this.props.other == null ? vialImg : this.props.other.icon} />
                </div>
            </div>
        )
    }
}

export default BoostsPanel;