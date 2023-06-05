import React from "react"
import styles from '@/pages/OrderTracker/OrderTracker.module.css';
import LineTrack from "@/pages/LineTrack/LineTrack";
import TitleTrack from "@/pages/TitleTrack/TitleTrack";
import TrackOrderButton from "@/pages/TrackOrderButton/TrackOrderButton";
function OrderTracker({className = '',status, ...delegated}) {

    return (
        <div className={styles.orderTrackerContainer}>
            <LineTrack status={status}></LineTrack>
            <TitleTrack status={status}></TitleTrack>
            <TrackOrderButton status={status}></TrackOrderButton>
        </div>
    );
}

export default OrderTracker