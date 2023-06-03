import React from "react"
import styles from '@/pages/InfoInCard/InfoInCard.module.css';
import Location from "@/pages/Location/Location";


function InfoInCard({className = '', time, ...delegated}) {

    return (
        <div className={styles.orderInfo}>
            <div className={styles.address}>
                <img src="/adress.svg" alt="Truck"/>
                <span className={styles.addressLine}></span>
                <img src="/marker.svg" alt="Marker"/>
            </div>
            <Location className={styles.pickUp} type={'PICKUP'} city={'New York'}
                      address={'Mortada street. Gainalkes..'} date={'01/04/23'} hour={'10:45'}></Location>
            <Location className={styles.dropOff} type={'DROPOFF'} city={'New York'}
                      address={'1789 NJ-27, Edison,08817..'} date={'01/04/23'} hour={'17:30'}></Location>
        </div>
    );
}

export default InfoInCard