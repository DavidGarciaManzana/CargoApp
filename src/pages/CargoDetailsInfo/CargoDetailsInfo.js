import React from "react"
import styles from '@/pages/CargoDetailsInfo/CargoDetailsInfo.module.css';
import InfoInCard from "@/pages/InfoInCard/InfoInCard";
function CargoDetailsInfo({orderId,referenceNumber,locations}) {
console.log(locations)
    return (
        <div className={styles.cargoDetailsInfo}>
            <h1 className={styles.reference}>Referencia <span>{referenceNumber}</span></h1>
            <h2 className={styles.order}>Order <span>#{orderId}</span></h2>
            <InfoInCard className={styles.infoCard} locations={locations} cargoDetails={true}></InfoInCard>

        </div>
    );
}

export default CargoDetailsInfo