import React from "react"
import styles from '@/pages/TitleTrack/TitleTrack.module.css';

function TitleTrack({className = '', status,name, ...delegated}) {

    return (
        <div className={styles.titleContainer}>
            {status?.map((stat, index) => {
                if (stat.active === true) {
                    if (index === 0) {
                        return <p className={styles.firstSp}>Created Order</p>
                    } else if (index === 1) {
                        return <p className={styles.special}>Accepted Order</p>
                    } else if (index === 2) {
                        return <p className={styles.special}>Pickup set up by {name}</p>
                    } else if (index === 3) {
                        return <p className={styles.special}>Pickup Completed</p>
                    }

                } else {
                    if (index === 0) {
                        return <p className={styles.first}>Created Order</p>
                    } else if (index === 1) {
                        return <p>Accepted Order</p>
                    } else if (index === 2) {
                        return  <p>Pickup set up by {name}</p>
                    } else if (index === 3) {
                        return  <p>Pickup Completed</p>
                    }
                }
            })}
        </div>
    );
}

export default TitleTrack