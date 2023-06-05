import React from 'react'
import styles from '@/pages/TruckHeader/TruckHeader.module.css'
import InTransit from "@/pages/InTransit/InTransit";
import Assigned from "@/pages/Assigned/Assigned";
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


                {status === 3 ?
                    <>
                        <InTransit title={'In Transit'}></InTransit>
                    </> :
                    <>
                        <Assigned title={'Assigned'}></Assigned>
                    </>
                }



            <span className={styles.line}></span>
        </div>
    )
}

export default TruckHeader
