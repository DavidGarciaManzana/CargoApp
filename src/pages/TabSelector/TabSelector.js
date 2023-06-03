import React from 'react'
import styles from '@/pages/TabSelector/TabSelector.module.css'

function TabSelector() {
    return (
        <div className={styles.tabSelectorContainer}>
            <h2 className={styles.upcoming}>Upcoming</h2>
            <h2 className={styles.completed}>Completed</h2>
            <h2 className={styles.past}>Past</h2>
        </div>
    )
}

export default TabSelector
