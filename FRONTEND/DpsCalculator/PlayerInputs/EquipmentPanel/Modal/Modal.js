import React from 'react';

import './Modal.css';

const Modal = (props) => {
    return (
        <div className="modal" onClick={() => props.click()}></div>
    )
}

export default Modal;