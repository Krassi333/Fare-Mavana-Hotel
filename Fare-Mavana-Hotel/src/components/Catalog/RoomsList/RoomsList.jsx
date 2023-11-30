import { useState, useEffect } from "react";
import styles from "./RoomList.module.css"
import RoomItem from "../RoomItem/RoomItem";
import * as roomServices from "../../../services/roomService";

export default function RoomList() {

    const [rooms, setRooms] = useState([]);

    useEffect( () => {
         roomServices.getAll()
            .then(result => setRooms(result));
    }, [])

 console.log("room list from RoomList " + rooms);
 
    return (

        <div className={styles.roomContainer}>
            {rooms.map(room => <RoomItem key={room._id} {...room} />)}

        </div>


    )
}