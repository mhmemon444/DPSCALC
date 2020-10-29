import React from 'react';

import './IndividualBoost.css';

const vialImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAeCAMAAAD0DqVnAAABTVBMVEUAAACzs7Wzs7OxsrOqqq25qFW2pVSxoVGvn1Cqmk18fHx7e3uKfj96ent5enp5eXp4eHmHez53d3h2dnd2dnZ1dXaEeDx0dHZzdHVzc3SCdjtycnRxcXNxcXJwcHJ/czlvb3Fub3FubnBtbW9sbW9sbG5ra21qam1qamxpaWxoaGt1azZnaGpmZmllZWhkZWhyZzRkZGdjY2diYmZvZTNhYmVgYWRfX2NsYjFeX2JeXmJcXGBbXGBaW19ZWl5ZWV5YWF1XV1xWV1xVVltUVVpUVFlTVFleVStSUlhRUldQUVdPUFZPT1VOT1RMTVJLTFJKS1FKSlBJSk9ISU5HSE1HR0xGR0tERUpDRElCQ0dCQkdLRCFBQUZAQEU/P0Q+PkM9PUI7PEA6Oz85Oj44OT03ODw2Nzs1Njo1NTkzMzcyMzYsLDAnKComJikAAAEJNgHRAAAAAXRSTlMAQObYZgAAAUNJREFUeAEFwUuOjkEUANBT33d/WpP2DjMzI7ZWi6mBXRgI5iSdWIA1YEDiGbr7r1vXOQHQMQAC0F89vP+gD0AAfP7i2pM+gABo2uEAEEBHO4Q+QID+cWot4uvsAwL45Tm3T/7dAQL4rbi7nZ4CAfwk9u305gYEGP1Ftvbsxg0DBODpp6NtGUAAfq99SYAA/NpqX+uyDxCgv22auRIQ0D9836ynOfOqDwjwDVvNzAQC/fwPZK65X/WBgB+rUbVmrgRBf/+vKS1zZuaxDwJ/Z6tG1czjngeE/u6CRlVlrpzHPgSXVxtWW5mZM/JA9POrRtlUrZx75kUf4eKilUatXDPyuAfhclsN1apqzn3l3HuM/nJjaVZVzsjtZB/BYamm1Mrcrp/dakMY3ZuqVVVVZ7funRgEQ+d1rarHZ48MCBh0YAD/AXyTtZ9lHAfMAAAAAElFTkSuQmCC"

const IndividualBoost = (props) => {
    // var boostedLevel = props.selected != null ? props.boostStat( props.selected.label, props.type, props.level) : props.level
    return (
        <div className="individualBoost" onClick={() => {props.click(props.type)}}>
            <img className="boostIcon" src = {props.icon} />
            <span className="levelboost">{props.boostedLevel} / {props.level}</span>
            <img className="vialimg" style={{height: (props.selected != null && props.selected.label=="Imbued heart") ? 18 : 25}} src={props.selected == null ? vialImg : props.selected.icon} />
        </div>
    )
}

export default IndividualBoost;