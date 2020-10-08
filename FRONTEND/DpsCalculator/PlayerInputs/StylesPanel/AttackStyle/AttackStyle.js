import React from 'react';

import './AttackStyle.css';

class AttackStyle extends React.Component {

    // componentDidMount() {
    //     this.props.initialSet(this.props.name, this.props.selected)
    // }

    

    render() {
        return (
            <div className="attackstyle-entry" >
                <div className={!this.props.selected ? "attackstyle-individual" : "indiv-sel"} onClick={() => this.props.selectHandler(this.props.opt, this.props.name)}>
                    <img src={this.props.rsrc} />
                    <div className="attackstyle-textinfo">{this.props.name}</div>
                </div>
            </div>
        )
    }


}

export default AttackStyle
