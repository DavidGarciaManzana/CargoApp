import React from "react"
import styles from '@/pages/CargoDetails/CargoDetails.module.css';
import Header from "@/pages/Header/Header";
import CargoDetailsInfo from "@/pages/CargoDetailsInfo/CargoDetailsInfo";
import {useRouter} from "next/router";
import UseDetailsAPI from "@/hooks/UseDetailsAPI";

let fetchedData;

function CargoDetails() {
    let referenceNumber = "Does not exist."
    const {orderId} = useRouter().query;
    let locationsArray;
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
    //Como es un mockup no voy a validar la fecha, todos los botones de resume mostraran la info de la API
    // if (fetchedData?._id === orderId) {
        referenceNumber = fetchedData?.order_number;
        locationsArray = fetchedData?.destinations;
    // }
    return (
        <div className={styles.cargoDetails}>
            <Header link={true} title={'Cargo Details'}/>
            <CargoDetailsInfo orderId={fetchedData?._id} referenceNumber={referenceNumber}
                              locations={locationsArray}></CargoDetailsInfo>
        </div>
    );
}

export default CargoDetails