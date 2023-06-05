import React from "react"
import styles from '@/pages/CargoDetails/CargoDetails.module.css';
import Header from "@/pages/Header/Header";
import CargoDetailsInfo from "@/pages/CargoDetailsInfo/CargoDetailsInfo";
import {useRouter} from "next/router";
import UseDetailsAPI from "@/hooks/UseDetailsAPI";
import Order from "@/pages/Order/Order";

let fetchedData;

function CargoDetails() {
    let referenceNumber = "Does not exist."
    const {orderId, locations} = useRouter().query;
    let locationsArray;
    console.log('location' + locations)
    const {handleAPI} = UseDetailsAPI();
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

    if (fetchedData?._id === orderId) {
        referenceNumber = fetchedData?.order_number;
        locationsArray = JSON.parse(locations);

    }
    return (
        <div className={styles.cargoDetails}>
            <Header title={'Cargo Details'}/>
            <CargoDetailsInfo orderId={fetchedData?._id} referenceNumber={referenceNumber}
                              locations={locationsArray}></CargoDetailsInfo>
        </div>
    );
}

export default CargoDetails