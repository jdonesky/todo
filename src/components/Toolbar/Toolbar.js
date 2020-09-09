import React from 'react';
import classes from './Toolbar.module.css'

export const Toolbar = props => {
        return (
            <div className={classes.Toolbar}>
                    <div style={{'display': 'flex'}}>1 item left</div>
                    <div className={classes.Buttons}>
                        <div>All</div>
                        <div>Active</div>
                        <div>Completed</div>
                    </div>
            </div>
        )
}