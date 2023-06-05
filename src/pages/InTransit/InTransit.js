import React from "react"
import styles from '@/pages/InTransit/InTransit.module.css';

function InTransit({className = '',title, ...delegated}) {
    return (
        <div className={`${styles.status} ${className}`}>
            <span className={`${styles.blueCircle}`}></span>
            <h4>{title}</h4>
        </div>
    );
}

export default InTransit
