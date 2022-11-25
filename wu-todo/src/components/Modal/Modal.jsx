import React from 'react';

const Modal = (props) => {
    const divStyle = { 
        display: props.displayModal ? 'block' : 'none'
    };
    function closeModal(e) {
        e.stopPropagation()
        props.closeModal()
    }

    return (
        <div className="modal" onClick={closeModal} style={divStyle}>
            <div className="modal-content" onClick={ e => e.stopPropagation() }>
                { props.children }
                <span onClick={closeModal} className="close">&times;</span>
            </div>
        </div>
    );
}
export default Modal;