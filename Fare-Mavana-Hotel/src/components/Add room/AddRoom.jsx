
import styles from './AddRoom.module.css';
import { useNavigate } from 'react-router-dom';
import * as roomServices from '../../services/roomService';
import { useContext } from 'react';
import AuthContext from '../../context/authContext';
import { useFormik } from 'formik';


export default function AddRoom() {
    const navigate = useNavigate();
    const { token } = useContext(AuthContext);

    const addRoomHandler = async (values) => {



        try {
            console.log(values);
             await roomServices.create(values, token);
            navigate('/');
        } catch (err) {
            //TODO err notification 
            console.log(err);
        }

    }

    const validate = (values) => {
        let errors = {};

        if (!values.title) {
            errors.title = 'Title is required!';
        }

        if (!values.imageUrl) {
            errors.imageUrl = 'Image is required!';
        }

        if (!values.floor) {
            errors.floor = 'Please, enter the floor number!';
        }

        if (!values.space) {
            errors.space = "Please, enter the room's total space!";
        }

        if (!values.description) {
            errors.description = 'Description is required!';
        }

        return errors;
    }

    const formik = useFormik({
        initialValues: {
            title: '',
            imageUrl: '',
            floor: 0,
            space: 0,
            description: ''
        },

        onSubmit: (values) => {
            addRoomHandler(values);
        },

        validate
    })

    return (
        <>
            <section id="createPage">
                <form className="createForm" onSubmit={formik.handleSubmit} >

                    <div>
                        <h2>Add Room</h2>
                        <div className="title">
                            <label htmlFor="title">Title:</label>
                            <input
                                name="title"
                                id="name"
                                type="text"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.name}
                            />
                            {formik.touched.title && formik.errors.title && (<p className='error'>{formik.errors.title}</p>)}
                        </div>


                        <div className="imageUrl">
                            <label htmlFor="imageUrl">Image:</label>
                            <input
                                name="imageUrl"
                                id="imageUrl"
                                type="text"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.name}
                            />
                            {formik.touched.imageUrl && formik.errors.imageUrl && (<p className='error'>{formik.errors.imageUrl}</p>)}

                        </div>

                        <div className="floor">
                            <label htmlFor="floor">Floor:</label>
                            <input
                                name="floor"
                                id="floor"
                                type="number"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.name}

                            />
                            {formik.touched.floor && formik.errors.floor && (<p className='error'>{formik.errors.floor}</p>)}

                        </div>

                        <div className="space">
                            <label htmlFor="space">Total space:</label>
                            <input
                                name="space"
                                id="space"
                                type="number"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.name}

                            />
                            {formik.touched.space && formik.errors.space && (<p className='error'>{formik.errors.space}</p>)}

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
                            <input
                                name="description"
                                id="description"
                                type="text"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.name}
                            />
                            {formik.touched.description && formik.errors.description && (<p className='error'>{formik.errors.description}</p>)}

                        </div>

                        <button className="btn" type="submit"  > Add Room</button >
                    </div >
                </form >
            </section >
        </>

    )
}