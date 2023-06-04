import React from 'react'
import styles from '@/pages/TruckHeader/TruckHeader.module.css'

function TruckHeader({type,status}) {
    return (
        <div className={styles.truckHeader}>
            <div className={styles.truckType}>
                {type === 'FTL' ?
                    <img src="/container-truck.svg" alt=""/> :
                    <img src="/freight.svg" alt=""/>
                }
                <h4>{type}</h4>
            </div>

            <div className={styles.status}>
                {status === 3 ?
                    <>
                        <span className={styles.blueCircle}></span>
                        <h4>In transit</h4>
                    </> :
                    <>
                        <span className={styles.greyCircle}></span>
                        <h4>Assigned</h4>
                    </>
                }

            </div>


            <span className={styles.line}></span>
        </div>
    )
}

export default TruckHeader
