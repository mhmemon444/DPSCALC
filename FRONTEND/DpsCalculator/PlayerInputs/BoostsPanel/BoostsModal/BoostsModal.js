import React from 'react';

import BoostsDropdown from './BoostsDropdown/BoostsDropdown';

import './BoostsModal.css';

const BoostsModal = (props) => {
        return (
            <>
                <div className="boostsmodal" onClick={() => props.click()}>
                    



                </div>
                <BoostsDropdown selectStr={props.selectStr} selectDef={props.selectDef} selectAtt={props.selectAtt} selectMag={props.selectMag} selectRang={props.selectRang} selectOther={props.selectOther} selectedBoost={props.selectedBoost} str={props.str} att={props.att} def={props.def} mag={props.mag} ran={props.ran} other={props.other}/>

            </>
        )
}

export default BoostsModal;