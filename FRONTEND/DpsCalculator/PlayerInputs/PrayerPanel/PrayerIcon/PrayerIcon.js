import React from 'react';

import ReactTooltip from "react-tooltip";

import './PrayerIcon.css';

class PrayerIcon extends React.Component {
    state = {
        active: false
    }

    componentDidMount() {
        // if ( (this.props.selectedPrayers).includes(this.props.name) ) {
        //     this.setState({
        //         active: true
        //     })
        // }
    }

    iconClickHandler = () => {
        // var curActive = this.state.active
        // this.setState({
        //     active: !curActive
        // }, () => {
        //     this.props.click(this.props.name, this.state.active)
        // })
        this.props.click(this.props.name);
    }

    render() {

        return (
            <>
            <div className="prayer-entry" >
                <div id="hovericon" className={this.props.selectedPrayers.includes(this.props.name) ? "prayer-active" : null} onClick={this.iconClickHandler}>
                    <img data-tip data-for={this.props.name} src={this.props.rsrc} />
                </div>
                
            </div>
            <ReactTooltip id={this.props.name} place="top" effect="solid">
                <span style={{fontFamily: 'Calibri, Arial, serif'}}>{this.props.name}</span>
            </ReactTooltip>
            </>
        )
    }
    
}

export default PrayerIcon