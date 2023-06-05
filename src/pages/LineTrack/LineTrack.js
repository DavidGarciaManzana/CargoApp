import React from "react"
import styles from '@/pages/LineTrack/LineTrack.module.css';
import {Check} from 'react-feather'
function LineTrack({className = '',status, ...delegated}) {


    return (
        <div className={styles.lineTrackContainer}>

            <span className={styles.line}></span>
            {status?.map((stat,index) => {
                if (stat.active === true) {
                    if(index===0){
                        return <span className={styles.circleOne}><Check color={'black'}></Check></span>;
                    } else if(index===1){
                        return <span className={styles.circleTwo}><Check color={'black'}></Check></span>;
                    }else if(index===2){
                        return <span className={styles.circleThree}><Check color={'black'}></Check></span>;
                    }else if(index===3){
                        return <span className={styles.circleFour}><Check color={'black'}></Check></span>;
                    }

                } else {
                    if(index===0){
                        return <img className={styles.whiteDot1} src="/white.png" alt="A white dot" />;
                    } else if(index===1){
                        return <img className={styles.whiteDot2} src="/white.png" alt="A white dot" />;
                    }else if(index===2){
                        return <img className={styles.whiteDot3} src="/white.png" alt="A white dot" />;
                    }else if(index===3){
                        return <img className={styles.whiteDot4} src="/white.png" alt="A white dot" />;
                    }
                }
            })}

        </div>
    );
}

export default LineTrack