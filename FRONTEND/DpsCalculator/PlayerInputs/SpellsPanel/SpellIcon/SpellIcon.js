import React from 'react';

import './SpellIcon.css';

const SpellIcon = (props) => {
    // state = {
    //     show: true
    // }

    // componentDidMount() {
    //     if ( (this.props.selectedPrayers).includes(this.props.name) ) {
    //         this.setState({
    //             active: true
    //         })
    //     }
    // }

    // iconClickHandler = () => {
    //     var curActive = this.state.active
    //     this.setState({
    //         active: !curActive
    //     }, () => {
    //         this.props.click(this.props.name, this.state.active)
    //     })
    // }

        // var spellClassName = this.props.specialspell ? "specialspell-entry" : "spell-entry";

        var imgClassName = null;
        if (props.special) {
            imgClassName = !((props.staff).includes(props.equippedStaff.label)) ? "hidespell" : null
        }

        return (
            <div className="spell-entry" >
                <div id="spell-hovericon">
                    <img 
                        className={imgClassName} 
                        src={props.rsrc} 
                    />
                </div>
                
            </div>
        )
    
}

export default SpellIcon