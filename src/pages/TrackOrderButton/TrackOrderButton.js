import React from "react"
import styles from '@/pages/TrackOrderButton/TrackOrderButton.module.css';
import Button from "@/pages/Button/Button";

function TrackOrderButton({className = '', status, ...delegated}) {
    let number = 0;
    console.log(status)
    status?.map((stat, index) => {
        if (stat.active === true) {
            if (index === 0) {
                number++
            } else if (index === 1) {
                number++
            } else if (index === 2) {
                number++
            } else if (index === 3) {
                number++
            }
        }
    })
    console.log('numeroooooo: ' + number)
    return (
        (number<2 ? <Button className={styles.button}>Track Order</Button> :
            <Button className={styles.yellowButton}>Track Order</Button>)

    );
}

export default TrackOrderButton