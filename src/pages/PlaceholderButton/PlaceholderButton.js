import React from "react"
import styles from '@/pages/PlaceholderButton/PlaceholderButton.module.css';

function PlaceholderButton({className = '', time, ...delegated}) {

    return (
        <div className={`${styles.placeholder} ${className}`} {...delegated}>
            <p>Start pickup in <span>{time}</span></p>
        </div>
    );
}

export default PlaceholderButton