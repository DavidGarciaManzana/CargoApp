import React from "react"
import styles from '@/pages/Main/Main.module.css';
import Search from "@/pages/Search/Search";
import Order from "@/pages/Order/Order";
import TabSelector from "@/pages/TabSelector/TabSelector";

 function Main({orderIdToSearch,setOrderIdToSearch}) {
    return (
        <main>
            <TabSelector/>
            <Search orderIdToSearch={orderIdToSearch} setOrderIdToSearch={setOrderIdToSearch}/>
            <Order orderId={'7804GNZ'} type={'FCL'} status={'inTransit'} pickup={true}/>
            <Order orderId={'7804GNZ'} type={'FC'} status={''} pickup={false}/>
        </main>
    );
}
export default Main