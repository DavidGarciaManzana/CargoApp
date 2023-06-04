import React from "react"
import styles from '@/pages/OrderInfoCard/OrderInfoCard.module.css';
import PlaceholderButton from "@/pages/PlaceholderButton/PlaceholderButton";
import PickupButton from "@/pages/PickupButton/PickupButton";
import ResumeButton from "@/pages/ResumeButton/ResumeButton";
import TruckHeader from "@/pages/TruckHeader/TruckHeader";
import InfoInCard from "@/pages/InfoInCard/InfoInCard";

function OrderInfoCard({type, status, date,locations}) {
    let pickup;
    let dateDiff;
    const orderDate = new Date(date)
    //Añado unas lineas de codigo para poder modificar las fechas y ver los cambios
    //Años
    orderDate.setFullYear(orderDate.getFullYear() + 1);
    //Meses
    orderDate.setMonth(orderDate.getMonth() + 3);
    //Dias
    orderDate.setDate(orderDate.getDate() - 30);
    // Horas
    // orderDate.setHours(orderDate.getHours() - 5);
    const actualDate = new Date()
    if (actualDate > orderDate) {
        pickup = true
        console.log('Navegar')
    } else {
        pickup = false
        let timeDiff = Math.abs(orderDate.getTime() - actualDate.getTime());

        // Diferentes medidas de tiempo
        let secondsDiff = Math.floor(timeDiff / 1000);
        let minutesDiff = Math.floor(secondsDiff / 60);
        let hoursDiff = Math.floor(minutesDiff / 60);
        let daysDiff = Math.floor(hoursDiff / 24);

        // Tiempo restante en minutos y segundos
        let remainingMinutes = minutesDiff % 60;
        let remainingSeconds = secondsDiff % 60;

        // Resultado
        let timeDiffString = "";

        if (daysDiff > 0) {
            timeDiffString += daysDiff + " day(s)";
        } else if (hoursDiff > 0) {
            timeDiffString += hoursDiff + ":" + remainingMinutes.toString().padStart(2, "0") + ":" + remainingSeconds.toString().padStart(2, "0");
        } else {
            timeDiffString += remainingMinutes + ":" + remainingSeconds.toString().padStart(2, "0");
        }
        dateDiff = timeDiffString
    }
console.log(orderDate.toLocaleDateString())

    return (
        <div className={styles.rectangleContainer}>
            <TruckHeader type={type} status={status}></TruckHeader>
            <InfoInCard startDate={orderDate} locations={locations}></InfoInCard>
            {pickup === false ?
                <PlaceholderButton className={styles.pickupButton} time={dateDiff}/> :
                <PickupButton className={styles.pickupButton}/>
            }
            <ResumeButton></ResumeButton>
        </div>
    );
}

export default OrderInfoCard