import React from "react";
import styles from "./SuitesList.module.css"
import RoomItem from "../RoomItem/RoomItem";

export default function SuitesList() {

    console.log('hello from suitesList');
    return (

        <div className={styles.roomContainer}>
           
            <RoomItem />
            <RoomItem />
            <RoomItem />
            <RoomItem />
            <RoomItem />


        </div>


    )
}