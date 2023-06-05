import React from "react"
import OrderAddress from "@/pages/OrderAddress/OrderAddress";
import CompleteOrderAddress from "@/pages/CompleteOrderAddress/CompleteOrderAddress";

function InfoInCard({className = '', startDate, locations, cargoDetails, ...delegated}) {
    let pickUpState;
    let pickUpAddress;
    let pickUpDate = startDate?.toLocaleDateString("es-MX", {
        year: "2-digit",
        month: "2-digit",
        day: "2-digit"
    });
    let pickUpHour = startDate?.toLocaleTimeString("es-MX", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit"
    });

    let dropOffState;
    let dropOffAddress;
    let dropOffDate;
    let dropOffHour;
    for (let i = 0; i < locations?.length; i++) {
        if (i === 0) {
            let address = locations[i].address.split(",")
            pickUpState = address[address.length - 2].trim();
            const startIndex = locations[i].address.indexOf(pickUpState);
            pickUpAddress = locations[i].address.substring(0, startIndex).trim();
        } else {
            let address = locations[i].address.split(",")
            dropOffState = address[address.length - 2].trim();
            const startIndex = locations[i].address.indexOf(dropOffState);
            dropOffAddress = locations[i].address.substring(0, startIndex).trim();
            const endDate = new Date(locations[i].end_date)
            //Añado unas lineas de codigo para poder modificar las fechas y ver los cambios
            //Años
            // endDate.setFullYear(endDate.getFullYear() + 1);
            //Meses
            // endDate.setMonth(endDate.getMonth() + 3);
            //Dias
            // endDate.setDate(endDate.getDate() - 30);
            // Horas
            // orderDate.setHours(orderDate.getHours() - 5);
            dropOffDate = endDate?.toLocaleDateString("es-MX", {
                year: "2-digit",
                month: "2-digit",
                day: "2-digit"
            });
            dropOffHour = endDate?.toLocaleTimeString("es-MX", {
                hour12: false,
                hour: "2-digit",
                minute: "2-digit"
            });
        }
    }

    return (
        <>
            {cargoDetails ? (
                <OrderAddress pickUpState={pickUpState} pickUpAddress={pickUpAddress} dropOffState={dropOffState}
                              dropOffAddress={dropOffAddress}/>
            ) : (
                <CompleteOrderAddress pickUpState={pickUpState} pickUpAddress={pickUpAddress}
                                      dropOffState={dropOffState} dropOffAddress={dropOffAddress}
                                      pickUpDate={pickUpDate} pickUpHour={pickUpHour} dropOffDate={dropOffDate} dropOffHour={dropOffHour}/>
            )
            }

        </>
    );
}

export default InfoInCard