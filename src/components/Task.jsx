import React from 'react'
import { generalStyle, taskStyle } from '../styles'
import { Pen, Trash } from 'lucide-react'

export default function Task({ value, editTask, deleteTask }) {
    return (
        <div className={taskStyle.container}>
            <p className={taskStyle.task}>{value}</p>
            <div className={taskStyle.buttons.container}>
                <button className={generalStyle.button} onClick={editTask}>
                    <div className={taskStyle.buttons.wrapContent}>
                        <Pen />
                        <p>Edit</p>
                    </div>
                </button>
                <button className={`${generalStyle.button} ${taskStyle.buttons.delete}`} onClick={deleteTask}>
                    <div className={taskStyle.buttons.wrapContent}>
                        <Trash />
                        <p>Delete</p>
                    </div>
                </button>
            </div>
        </div>
    )
}