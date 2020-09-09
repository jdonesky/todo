import React from 'react';
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import classes from './SelectAll.module.css'
export const SelectAll = props => {
    return (
        <div className={classes.Container} >
            <FontAwesomeIcon className={classes.Chevron} icon={faChevronDown} />
        </div>
    )
}