import React from 'react';
import classes from './Title.css'

export const title = props => {
    return (
        <div className={classes.Container}>
            <h1 className={classes.Title}>{props.title}</h1>
        </div>
    )
}

