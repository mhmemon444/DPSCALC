import React from 'react';

import './ExampleComponent.css'

const ExampleComponent = (props) => {
    return (
        <div className="exampleComponent">
            This is an Example React Component : {props.number}
        </div>
    )
}

export default ExampleComponent