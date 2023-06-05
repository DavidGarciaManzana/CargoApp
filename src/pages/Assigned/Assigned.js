import React from "react"
import styles from '@/pages/Assigned/Assigned.module.css';

function Assigned({className = '',title, ...delegated}) {
    return (
        <div className={`${styles.status} ${className}`}>
            <span className={`${styles.greyCircle}`}></span>
            <h4>{title}</h4>
        </div>
    );
}

export default Assigned
