import React from 'react'
import styles from '@/pages/Order/Order.module.css'
import OrderInfoCard from "@/pages/OrderInfoCard/OrderInfoCard";
function Order({orderId, type, status,pickup}) {
    return (
        <div className={styles.orderContainer}>
            <h3 className={styles.orderTitle}>Order <span>#{orderId}</span></h3>
            <OrderInfoCard type={type} status={status} pickup={pickup}/>
        </div>
    )
}

export default Order