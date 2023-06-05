import React from "react"
import styles from '@/pages/CargoDetails/CargoDetails.module.css';
import Header from "@/pages/Header/Header";
import CargoDetailsInfo from "@/pages/CargoDetailsInfo/CargoDetailsInfo";
import {useRouter} from "next/router";
import UseDetailsAPI from "@/hooks/UseDetailsAPI";
import TrackCard from "@/pages/TrackCard/TrackCard";
import OrderTracker from "@/pages/OrderTracker/OrderTracker";

let fetchedData;

function CargoDetails() {
    let referenceNumber = "Does not exist."
    const {orderId} = useRouter().query;
    let locationsArray;
    let time;
    let startTime;
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
    time = new Date(fetchedData?.start_date)
    startTime = time?.toLocaleTimeString("es-MX", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit"
    });
    // }
    const name = fetchedData?.driver.nickname.split(" ")[0];
    return (
        <div className={styles.cargoDetails}>
            <Header link={true} title={'Cargo Details'}/>
            <CargoDetailsInfo orderId={fetchedData?._id} referenceNumber={referenceNumber}
                              locations={locationsArray}></CargoDetailsInfo>
            <TrackCard name={name} status={fetchedData?.status_list.pickup} startTime={startTime}></TrackCard>

        </div>
    );
}

export default CargoDetails