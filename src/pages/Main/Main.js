import React from "react"
import styles from '@/pages/Main/Main.module.css';
import Search from "@/pages/Search/Search";
import Order from "@/pages/Order/Order";
import TabSelector from "@/pages/TabSelector/TabSelector";
import UseOrdersAPI from "@/hooks/UseOrdersAPI";
let fetchedData = []
function Main({orderIdToSearch, setOrderIdToSearch}) {
    const {handleAPI} = UseOrdersAPI();
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                fetchedData = await handleAPI()
                setIsLoading(false);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);
    return (
        <main className={styles.main}>
            <TabSelector/>
            <Search orderIdToSearch={orderIdToSearch} setOrderIdToSearch={setOrderIdToSearch}/>
            {isLoading ? (
                <div className={styles.loading}>Loading...</div>
            ) : (
                orderIdToSearch === '' ? fetchedData.map((order, index) => (
                    <Order
                        key={index}
                        orderId={order._id}
                        type={order.type}
                        status={order.status}
                        date={order.start_date}
                        locations={order.destinations}
                    />
                )) : fetchedData.map((order, index) => (
                    order._id.startsWith(orderIdToSearch) && <Order
                        key={index}
                        orderId={order._id}
                        type={order.type}
                        status={order.status}
                        date={order.start_date}
                        locations={order.destinations}
                    />
                ))
            )}
        </main>
    );
}

export default Main