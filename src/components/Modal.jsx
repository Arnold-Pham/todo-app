import React, { useState, useEffect } from 'react'
import { generalStyle, modalStyle } from '../styles'
import { X } from 'lucide-react'

export default function Modal(props) {
    const [textEntered, setTextEntered] = useState('')
    const [isUpdating, setIsUpdating] = useState(false)

    useEffect(() => {
        if (props.taskToEdit !== null) {
            setTextEntered(props.taskToEdit.text)
            setIsUpdating(true)
        } else {
            setTextEntered('')
            setIsUpdating(false)
        }
    }, [props.taskToEdit])

    const onChangeHandler = (event) => setTextEntered(event.target.value)
    const submitHandler = (event) => {
        if (isUpdating) {
            props.updateTask(props.taskToEdit.key, textEntered)
        } else {
            props.createTask(textEntered)
        }
        event.preventDefault()
    }

    return (
        <div className={modalStyle.modalBackground}>
            <div className={modalStyle.container}>
                <div className={modalStyle.wrapMainContent}>
                    <button type='button' className={modalStyle.closeButton} onClick={props.hideModal}>
                        <X />
                    </button>
                    <div className={modalStyle.content.container}>
                        <h2 className={modalStyle.content.title}>{isUpdating ? 'Update Task' : 'Create Task'}</h2>
                        <form className={modalStyle.content.form}>
                            <div>
                                <label htmlFor='task' className={modalStyle.content.label}>Your task</label>
                                <input type='text' name='task' id='task' className={modalStyle.content.input} value={textEntered} onChange={onChangeHandler} autoFocus required />
                            </div>
                            <button type="submit" className={textEntered ? generalStyle.button : `${generalStyle.button} cursor-not-allowed`} disabled={!textEntered} onClick={submitHandler}>
                                {isUpdating ? 'Update Task' : 'Create New Task'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
