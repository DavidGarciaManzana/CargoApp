import React from "react"
import styles from '@/pages/TrackCard/TrackCard.module.css';
import Driver from "@/pages/Driver/Driver";
import OrderTracker from "@/pages/OrderTracker/OrderTracker";
function TrackCard({className = '',startTime,status, ...delegated}) {

    return (
        <div className={styles.trackCardParent}>
            <span className={styles.background}></span>
            <Driver></Driver>
            <p className={styles.hour}>{startTime}</p>
            <OrderTracker status={status}></OrderTracker>
        </div>
    );
}

export default TrackCard