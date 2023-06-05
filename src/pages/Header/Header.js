import React from 'react'
import styles from '@/pages/Header/Header.module.css'

function Header({link = false, title}) {
    function goBack() {
        window.history.back();
    }

    return (
        <header className={styles.header}>
            {link ? (
                <a onClick={goBack}>
                    <img className={styles.angleSmallDown} src="/angle-small-down.svg" alt="Back button"/>
                </a>) : (<img className={styles.angleSmallDown} src="/angle-small-down.svg" alt="Back button"/>
            )}

            <h1 className={styles.cargoOrders}>{title}</h1>
            <img className={styles.bell} src="/bell.svg" alt="Notificacions button"/>
        </header>
    )
}

export default Header
