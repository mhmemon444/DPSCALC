import React from 'react';
import ReactDOM from 'react-dom';

import ExampleComponent from './ExampleComponent/ExampleComponent';

const RestaurantsExampleReact = () => {
    return (
        <div style={{marginTop: "50px", border: "1px dashed black", width: "400px"}}>
            React Example
            <ExampleComponent number={1}/>
            <ExampleComponent number={2}/>
            <ExampleComponent number={3}/>
        </div>
    )
}

ReactDOM.render(
    <RestaurantsExampleReact />,
    document.getElementById('restaurantsexample')
);