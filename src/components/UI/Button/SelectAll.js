import React from 'react';
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import classes from './SelectAll.module.css'

export const SelectAll = props => {

    const iconClass = [classes.Chevron]
    if (props.show) {
        iconClass.push(classes.Show)
    }
    if (props.active) {
        iconClass.push(classes.active)
    }

    return (
        <div className={classes.Container} >
            <FontAwesomeIcon onClick={props.toggled} className={iconClass.join(" ")} icon={faChevronDown} />
        </div>
    )
}