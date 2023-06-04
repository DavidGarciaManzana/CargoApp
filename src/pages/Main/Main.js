import React from "react"
import styles from '@/pages/Main/Main.module.css';
import Search from "@/pages/Search/Search";
import Order from "@/pages/Order/Order";
import TabSelector from "@/pages/TabSelector/TabSelector";
import UseBegoAPI from "@/hooks/UseBegoAPI";
let fetchedData = []
function Main({orderIdToSearch, setOrderIdToSearch}) {
    const {handleAPI} = UseBegoAPI();
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                fetchedData = await handleAPI()
                setIsLoading(false);
                // Process the data or update state here
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);
    console.log(fetchedData)
    return (
        <main>
            <TabSelector/>
            <Search orderIdToSearch={orderIdToSearch} setOrderIdToSearch={setOrderIdToSearch}/>
            {isLoading ? (
                <div className={styles.loading}>Loading...</div>
            ) : (
                fetchedData && fetchedData.map((order, index) => (
                    <Order
                        key={index}
                        orderId={order._id}
                        type={order.type}
                        status={order.status}
                        pickup={false}
                    />
                ))
            )}
        </main>
    );
}

export default Main