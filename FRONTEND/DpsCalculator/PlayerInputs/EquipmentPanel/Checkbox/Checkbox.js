import React from 'react';

const CHECKED = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAPCAMAAADjyg5GAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAFRQTFRFAAAAWnNBS0I2UlJNS0I2WnNB7wwIWnNBWnNBVUtAwAAAWnNBWnNBlwAAWnNBRTwxoCYjNjMsRTwxHHI+WnNBHHI+WnNBUEM/HHI+WnNBUEM/HHI+CNnaOwAAABx0Uk5TAAH9//8L/wYf//8SEP8T////BQgKDAcHBQJDAqnYDtUAAAB5SURBVHicNc/ZFsIwCEXRW0FqqBHjUKf//0+5dPW8hB3yEgCYDpLpEWaYT9oyaSJmjqXEKJylNa3M+wKVXeZ6ARXbMgcyopZXjYGWA53LKDpt1nNJls0jSOSbtHfqhjlvw92pcceDZ3gf7Il5nWJsvd78z/qJ6gv8/sMCB/ikU8VQAAAAAElFTkSuQmCC"
const UNCHECKED = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAPCAMAAADjyg5GAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEJQTFRFAAAAWnNBS0I2UlJNWnNBWnNBVUtAWnNBS0I2WnNBRTwxNjMsiZutiZutiZutiZutiZutiZutiZutiZutiZutiZuteD04EAAAABZ0Uk5TAAr//x8G/wj4Av//TiYdAxoFCAEfEOvBL48AAABlSURBVHicTc5JEsMgDETRjsBK0vKQ8f5XTSsY7L+Bh6AKALhYUVaRTeaquA6k681HdgeKlpZ7hZWuDCl2MclOBnK4m4PMF4zBf6IdjCDm0ywWYGW0vdr0zce+j+cLeAOfdvmr0Q+3cAUo1DyqqgAAAABJRU5ErkJggg=="


const Checkbox = (props) => {
    var n = "checked" + props.type
    return (
            <div className={props.type + "check"}>
                <img style={{ height: props.height }} className="checkimg" onClick={(e) => props.checkboxClickHandler(e, n)} src={props.checked ? CHECKED : UNCHECKED} />
            </div>
    )
}

export default Checkbox