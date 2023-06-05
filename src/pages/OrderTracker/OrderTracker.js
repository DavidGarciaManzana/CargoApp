import React from "react"
import styles from '@/pages/OrderTracker/OrderTracker.module.css';
import LineTrack from "@/pages/LineTrack/LineTrack";
import TitleTrack from "@/pages/TitleTrack/TitleTrack";
import TrackOrderButton from "@/pages/TrackOrderButton/TrackOrderButton";
function OrderTracker({className = '',status,name, ...delegated}) {

    return (
        <div className={styles.orderTrackerContainer}>
            <LineTrack status={status}></LineTrack>
            <TitleTrack name={name} status={status}></TitleTrack>
            <TrackOrderButton status={status}></TrackOrderButton>
        </div>
    );
}

export default OrderTracker