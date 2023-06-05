import React from "react"
import styles from '@/pages/Driver/Driver.module.css';

function Driver({className = '', ...delegated}) {

    return (
        <div className={styles.driverContainer}>
            <div className={styles.oval}>
                <img src="/driver.png" alt="Driver picture"/>
            </div>
        </div>
    );
}

export default Driver