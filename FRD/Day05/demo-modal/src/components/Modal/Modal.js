import React from 'react'
import ReactDOM from 'react-dom';
import style from './modal.module.css'

function ModalContent({ close, title }) {
    return (
        <div className={style.wrapper}>
            <div className={style.modal}>
                <div className={style.header}>
                    <h2>{title}</h2>
                    <button onClick={close} >X</button>
                </div>
                <div className={style.content}></div>
                <div className={style.footer}>
                    <button>Ok</button>
                    <button onClick={close}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

function Modal({ close, ...rest }) {
    return ReactDOM.createPortal(<ModalContent close={close} {...rest}></ModalContent>, document.getElementById("root-modal"))
}

export default Modal