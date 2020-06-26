import React from 'react';
import './styles.css'
import {FiXCircle} from 'react-icons/fi'

const Modal = ({onClose = () => {}, children }) => {



  return(
    <div  className="modal" >
      <div className="container">
        <button onClick={onClose} className="closed" >
          <FiXCircle color="#FFF" size={20}/>
        </button>
        <div className="content">{ children }</div>
      </div>
    </div>
  )
}

export default Modal;