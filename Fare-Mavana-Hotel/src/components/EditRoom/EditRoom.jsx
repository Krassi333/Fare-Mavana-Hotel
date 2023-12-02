import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import useForm from '../../hooks/useForm';
import * as roomServices from '../../services/roomService';
import { useContext } from 'react';
import AuthContext from '../../context/authContext';

export default function EditRoom() {
    const navigate = useNavigate();
    let roomId = useParams();
    roomId = roomId.id;
    const {token} = useContext(AuthContext);

    const [roomData, setRoomData] = useState({});

    useEffect(() => {
        roomServices.getOne(roomId)
            .then(result => {
                console.log(result);
                setRoomData(result)
            });
    }, [roomId]);

    const onChangeHandler = (e) => {
        setRoomData(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    }

    const editRoomHandler = async (values) => {
        console.log('here');
        try {
            roomServices.edit(roomId, roomData,token);
            navigate('/roomsCatalog');
        }
        catch (err) {
            console.log(err);
        }
    }


    return (
        <>
            <section id="editPage">
                <form className="editForm" onSubmit={editRoomHandler} >

                    <div>
                        <h2>Edit Room Information</h2>
                        <div className="title">
                            <label htmlFor="title">Title:</label>
                            <input name="title" id="name" type="text" value={roomData.title} onChange={onChangeHandler} />
                        </div>


                        <div className="imageUrl">
                            <label htmlFor="imageUrl">Image:</label>
                            <input name="imageUrl" id="imageUrl" type="text" value={roomData.imageUrl} />
                        </div>

                        <div className="floor">
                            <label htmlFor="floor">Floor:</label>
                            <input name="floor" id="floor" type="number" value={roomData.floor} />
                        </div>

                        <div className="space">
                            <label htmlFor="space">Total space:</label>
                            <input name="space" id="space" type="number" value={roomData.space} />
                        </div>


                        {/*  </div> <p>Category:</p>
                <mat-chip-listbox aria-label="Category" name="category" id="category" ngModel #inputCategory="ngModel"
                    required >
                    <mat-chip-option>Cars</mat-chip-option>
                    <mat-chip-option>Trains</mat-chip-option>
                    <mat-chip-option>Planes</mat-chip-option>
                    <mat-chip-option>Ships</mat-chip-option>
                    <mat-chip-option>Other</mat-chip-option>
    </mat-chip-listbox> */}

                        <div className="description">
                            <label htmlFor="description">Description:</label>
                            <input name="description" id="description" type="text" value={roomData.description} />
                        </div>

                        <button className="btn" type="submit"  > Edit Room</button >
                    </div >
                </form >
            </section >
        </>
    )
}