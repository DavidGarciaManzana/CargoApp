import React from "react"
import styles from '@/pages/PickupButton/PickupButton.module.css';
import Button from "@/pages/Button/Button";

function PickupButton({className = '', time, ...delegated}) {

    return (
        <Button className={`${styles.pickupButton} ${className}`} {...delegated}>
            <p>Its time for pickup</p>
        </Button>
    );
}

export default PickupButton