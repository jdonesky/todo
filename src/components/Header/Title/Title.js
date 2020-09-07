import React from 'react';
import classes from './Title.module.css'

export const Title = props => {
    return (
        <div className={classes.Container}>
            <h1 className={classes.Title}>{props.title}</h1>
        </div>
    )
}

