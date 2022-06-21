import React from "react";
import './CreateTodoButton.css'

let flag = false

function CreateTodoButton(props) {
    const onClickButton = () => {
        if(flag){
            props.setOpenModal(false)
            flag = false
        }else
        {
            props.setOpenModal(true)
            flag = true
        }
    }

    return (
        <button 
            className="CreateTodoButton"
            onClick={onClickButton}
        >
            +
        </button>
    )
}

export { CreateTodoButton }