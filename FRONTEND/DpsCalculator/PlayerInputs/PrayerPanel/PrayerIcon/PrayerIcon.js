import React from 'react';

import './PrayerIcon.css';

class PrayerIcon extends React.Component {
    state = {
        active: false
    }

    componentDidMount() {
        if ( (this.props.selectedPrayers).includes(this.props.name) ) {
            this.setState({
                active: true
            })
        }
    }

    iconClickHandler = () => {
        var curActive = this.state.active
        this.setState({
            active: !curActive
        }, () => {
            this.props.click(this.props.name, this.state.active)
        })
    }

    render() {

        return (
            <div className="prayer-entry" >
                <div id="hovericon" className={this.state.active ? "prayer-active" : null} onClick={this.iconClickHandler}>
                    <img src={this.props.rsrc} />
                </div>
                
            </div>
        )
    }
    
}

export default PrayerIcon