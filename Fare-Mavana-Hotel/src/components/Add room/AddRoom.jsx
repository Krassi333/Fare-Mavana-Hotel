
import styles from './AddRoom.module.css';
import { useNavigate } from 'react-router-dom';
import * as roomServices from '../../services/roomService';
import { useContext } from 'react';
import AuthContext from '../../context/authContext';

export default function AddRoom() {
    const navigate = useNavigate();
    const { token } = useContext(AuthContext);

    const addRoomHandler = async (e) => {

        e.preventDefault();
        const roomData = Object.fromEntries(new FormData(e.currentTarget));


        try {
            const result = await roomServices.create(roomData, token);
            navigate('/');
        } catch (err) {
            //TODO err notification 
            console.log(err);
        }

    }
    return (
        <>
            <section id="createPage">
                <form className="createForm" onSubmit={addRoomHandler} >

                    <div>
                        <h2>Add Room</h2>
                        <div className="title">
                            <label htmlFor="title">Title:</label>
                            <input name="title" id="name" type="text" />
                        </div>


                        <div className="imageUrl">
                            <label htmlFor="imageUrl">Image:</label>
                            <input name="imageUrl" id="imageUrl" type="text" />
                        </div>

                        <div className="floor">
                            <label htmlFor="floor">Floor:</label>
                            <input name="floor" id="floor" type="number" />
                        </div>

                        <div className="space">
                            <label htmlFor="space">Total space:</label>
                            <input name="space" id="space" type="number" />
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
                            <input name="description" id="description" type="text" />
                        </div>

                        <button className="btn" type="submit"  > Add Room</button >
                    </div >
                </form >
            </section >
        </>

    )
}