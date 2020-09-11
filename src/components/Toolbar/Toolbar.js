import React from 'react';
import classes from './Toolbar.module.css'

export const Toolbar = props => {
    const clearClass = [classes.Clear];
    if (props.complete) {
        clearClass.push(classes.Visible)
    }

        return (
            <div className={classes.Toolbar}>
                    <div className={classes.Incomplete}>{props.incomplete} item{props.incomplete !== 1 ? 's' : null} left</div>
                    <div className={classes.Tabs}>
                        <div className={props.activeTab === 'All' ? classes.active : null} onClick={() => props.switchTab('All')}>All</div>
                        <div className={props.activeTab === 'Active' ? classes.active: null} onClick={() => props.switchTab('Active')}>Active</div>
                        <div className={props.activeTab === 'Completed' ? classes.active: null} onClick={() => props.switchTab('Completed')}>Completed</div>
                    </div>
                    <div className={clearClass.join(" ")} onClick={props.clearCompleted}>Clear Completed</div>
            </div>
        )
}