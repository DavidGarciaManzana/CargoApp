import React from 'react'
import styles from '@/pages/Order/Order.module.css'
import OrderInfoCard from "@/pages/OrderInfoCard/OrderInfoCard";
function Order({orderId, type, status,date,locations}) {

    return (
        <div className={styles.orderContainer}>
            <h3 className={styles.orderTitle}>Order <span>#{orderId}</span></h3>
            <OrderInfoCard orderId={orderId} type={type} date={date} status={status} locations={locations} />
        </div>
    )
}

export default Order