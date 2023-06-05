import React from "react"
import styles from '@/pages/OrderAddress/OrderAddress.module.css';
import Location from "@/pages/Location/Location";
import InTransit from "@/pages/InTransit/InTransit";
import Assigned from "@/pages/Assigned/Assigned";

function OrderAddress({className = '', pickUpState,pickUpAddress,dropOffState,dropOffAddress, ...delegated}) {

    return (
        <div className={`${styles.orderInfo2} ${className}`}>
            <div className={styles.address2}>
                <div className={styles.bigOval}>
                    <div className={styles.smallOval}>
                        <img src="/truck.svg" alt="Truck"/>
                    </div>
                </div>
                <span className={styles.addressLine2}></span>
                <span className={styles.shape}>
                        <span className={styles.insideShape}></span>
                    </span>
            </div>
            <Location className={styles.pickUp} type={'PICKUP'} city={pickUpState}
                      address={pickUpAddress}></Location>
            <InTransit className={styles.inTransit} title={'Accepted'}></InTransit>
            <Location className={styles.dropOff} type={'DROPOFF'} city={dropOffState}
                      address={dropOffAddress}></Location>
            <Assigned className={styles.assigned} title={'On hold'}></Assigned>
        </div>
    );
}

export default OrderAddress