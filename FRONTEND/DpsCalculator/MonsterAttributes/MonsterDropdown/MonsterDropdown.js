import React from 'react';

import './MonsterDropdown.css';

import Select, {createFilter, components} from "react-select";

// import Select, {components} from "react-select";

import * as m from './monsterattribs';

const intermediateMonsterArray = Object.keys(m.monster);

const monsterSelect = [
    
]

intermediateMonsterArray.forEach(mon => {
    monsterSelect.push({
        ...m.monster[mon],
        label: mon,
        value: mon
    })
})

// const customStyles = {
//     option: (provided, state) => ({
//         ...provided,
//         color: state.isSelected ? 'black' : 'black',
//         backgroundColor: state.isSelected ? '#b3b3b3' : 'white',
//         ':hover': {backgroundColor: "#b3b3b3"},
//         fontFamily: 'Calibri'
//     })
// }

// const MenuList = function MenuList(props) {
//     const children = props.children;

//     if (!children.length) {
//         return (<div className="myClassListName">{children}</div>);
//     }

//     return (
        
//             <div className="myClassListName">
//                 {children.length && children.map((key, i) => {
//                     // delete key.props.innerProps.onMouseMove; //FIX LAG!!
//                     // delete key.props.innerProps.onMouseOver;  //FIX LAG!!

//                     return (
//                         <div className="myClassItemName" key={i}>{key}</div>
//                     );
//                 })}
//             </div>
//     );
// };

// const MonsterDropdown = (props) => {
//     return (
//         <div className="monster-dropdown">
//             {/* <div style={{ textAlign: 'center', color: 'rgb(207, 207, 207)' }}>Select monster</div> */}
//             <div style={{ textAlign: 'center', width: '210px', margin: 'auto' }}>
//                 <Select
//                     //value={props.selectedMonster.value}
//                     options={monsterSelect}
//                     components={{ MenuList }}
//                     //styles={customStyles}
//                     // filterOption={createFilter({ ignoreAccents: false })}
//                     onChange={props.selectMonster.bind(this)}
//                 />
//             </div>
            
//         </div>
//     )
//     listRenderer = props => <MenuList {...props} />;
// }

// export default MonsterDropdown




//Second
const customStyles = {
    option: (provided, state) => ({
        ...provided,
        color: state.isSelected ? 'black' : 'black',
        backgroundColor: state.isSelected ? '#b3b3b3' : 'white',
        backgroundColor: state.isFocused ? "#cacaca" : "inherit",
        fontFamily: 'Calibri',
        width: '200px',
        overflowX: 'hidden'
    })
}

const { Option } = components;
const IconOption = props => (
    <Option {...props} className="itemoption">
        {/* {props.data.icon == "NA" ? null :
        <img
            src={props.data.icon}
            style={{ height: 25, position: "relative", bottom: 0  }}
            alt={props.data.label}
            loading="lazy"
        />
        } */}
        <span style={{fontFamily: "Calibri, Arial, sans-serif", width: '200px'}}>{props.data.label}</span>
    </Option>
);

const CustomSelectValue = props => (
    <div>
        <span style={{fontFamily: "Calibri, Arial, sans-serif"}}>{props.data.label.length > 19 ? props.data.label.slice(0, 19) + "..." : props.data.label}</span>
    </div>
)

const MonsterDropdown = (props) => {
    return (
        <div style={{width: '200px', margin: 'auto', marginTop: '13px'}}>
                <Select
                    options={monsterSelect}
                    onChange={props.selectMonster.bind(this)}
                    styles={customStyles}
                    className="hellostyles"
                    components={{ Option: IconOption, SingleValue: CustomSelectValue }}
                />
        </div>
    )
}

export default MonsterDropdown

