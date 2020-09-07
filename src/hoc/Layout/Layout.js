import React from 'react';
import Title from '../../components/Header/Title/Title.js'
import classes from './Layout.css'

export const layout = props => {
    return (
        <div className={classes.Layout}>
            <Title title="todos" />
            {props.children}
        </div>
    )
}