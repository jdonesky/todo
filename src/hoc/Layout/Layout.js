import React from 'react';
import {Background} from '../../components/UI/Background/Background'
import { Title } from '../../components/Header/Title/Title.js'
import classes from './Layout.module.css'

export const Layout = props => {
    return (
        <React.Fragment>
        <Background />
        <div className={classes.Layout}>
            <Title title="todos" />
            <div className={classes.Content}>
                {props.children}
            </div>
        </div>
        </React.Fragment>
    )
}