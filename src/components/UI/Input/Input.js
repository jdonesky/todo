import React from 'react'
import classes from './Input.module.css'

export const Input = props => {
    return (
        <div className={classes.InputContainer}>
            <input
                className={classes.InputElement}
                type={props.type}
                value={props.value}
                placeholder={props.placeholder}
                onChange={props.changed}
            />
        </div>
    )

}