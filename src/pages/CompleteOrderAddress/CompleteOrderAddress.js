import React from "react"
import styles from '@/pages/CompleteOrderAddress/CompleteOrderAddress.module.css';
import Location from "@/pages/Location/Location";

 function CompleteOrderAddress({className = '', pickUpState,pickUpAddress,dropOffState,dropOffAddress,pickUpDate,pickUpHour,dropOffDate,dropOffHour, ...delegated}) {

    return (
        <>
            <div className={`${styles.orderInfo} ${className}`}>
                <div className={styles.address}>
                    <img src="/adress.svg" alt="Truck"/>
                    <span className={styles.addressLine}></span>
                    <img src="/marker.svg" alt="Marker"/>
                </div>
                <Location type={'PICKUP'} city={pickUpState}
                          address={pickUpAddress} date={pickUpDate} hour={pickUpHour}></Location>
                <Location type={'DROPOFF'} city={dropOffState}
                          address={dropOffAddress} date={dropOffDate} hour={dropOffHour}></Location>
            </div>
        </>
    );
}
export default CompleteOrderAddress