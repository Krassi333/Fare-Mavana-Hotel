import * as React from 'react';
import Box from '@mui/material/Box';
import styles from './Catalog.module.css';
import * as roomServices from "../../services/roomService";
import RoomItem from './RoomItem/RoomItem';

export default function Catalog() {
    const [rooms, setRooms] = React.useState([]);

    React.useEffect(() => {
        roomServices.getAll()
            .then(result => setRooms(result));
    }, [])

    console.log(rooms);
    return (
        <>
            <h1 className={styles.catalogHeader}>Rooms & Suites</h1>
            <p className={styles.description}>The rooms of Fare Mavana Hotel were curated with “a sense of place” in mind, with design features and details that genuinely reflect the culture and traditions of this historic city. Accessible rooms are also available on request.</p>
            <div className={styles.catalog}>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
                    {rooms.map((room) => (
                        <RoomItem key={room._id} room={room} ></RoomItem>
                    ))}
                </Box>

            </div>
        </>

    );
}