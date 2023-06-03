import React from "react"
import styles from '@/pages/Location/Location.module.css';

function Location({className = '', type, city, address, date, hour, ...delegated}) {

    return (
        <div className={`${styles.location} ${className}`} {...delegated}>
            <div className={styles.info}>
            <p className={styles.type}>{type}</p>
            <p className={styles.city}>{city}</p>
            <p className={`${styles.city} ${styles.address}`}>{address}</p>
            </div>
            <div className={styles.timeContainer}>
            <p className={styles.date}>{date}</p>
            <p className={styles.hour}>{hour}</p>
            </div>
        </div>
    );
}

export default Location