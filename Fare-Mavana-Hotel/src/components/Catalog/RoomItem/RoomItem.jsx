import React from "react";
import styles from "./RoomItem.module.css";
import { Link } from "react-router-dom";

export default function RoomItem({
    title,
    imageUrl,
    description,
    _id
}) {
    return (
        <div className={styles.card}>
            <div className={styles.imgContainer}>
                <img src={imageUrl} alt="Card image cap" />
                <a href="#">
                    <div className="mask rgba-white-slight" />
                </a>
            </div>

            <div className="card-body">
                <h4 className="card-title">{title}</h4>
                <Link to={`/rooms/${_id}`} className={styles.btn}>Read more</Link>
            </div>
        </div>
    )
}