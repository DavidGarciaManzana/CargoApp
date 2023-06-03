import React from "react"
import styles from '@/pages/OrderInfoCard/OrderInfoCard.module.css';
import PlaceholderButton from "@/pages/PlaceholderButton/PlaceholderButton";
import PickupButton from "@/pages/PickupButton/PickupButton";
import ResumeButton from "@/pages/ResumeButton/ResumeButton";
import TruckHeader from "@/pages/TruckHeader/TruckHeader";
import InfoInCard from "@/pages/InfoInCard/InfoInCard";

function OrderInfoCard({type, status, pickup}) {

    return (
        <div className={styles.rectangleContainer}>
            <TruckHeader type={type} status={status}></TruckHeader>
            <InfoInCard></InfoInCard>
            {pickup === false ?
                <PlaceholderButton className={styles.pickupButton} time={'1:30:00'}/> :
                <PickupButton className={styles.pickupButton}/>
            }
            <ResumeButton></ResumeButton>
        </div>
    );
}

export default OrderInfoCard