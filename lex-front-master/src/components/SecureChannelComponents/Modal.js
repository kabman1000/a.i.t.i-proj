import React from 'react';
import ReactDOM from 'react-dom';
import '../../styles/Modal.css'

const Modal = (props) => {
    return ReactDOM.createPortal(
        <div onClick={props.onDismiss} className="modal">
            <div onClick={(e) => e.stopPropagation()} className="modal-body">
                <div className="header">{props.title}</div>
                <div className="content">{props.content}</div>
                <div className="actions">
                    {props.actions}
                </div>
            </div>
        </div>, document.querySelector('#modal')
    )
}

export default Modal;