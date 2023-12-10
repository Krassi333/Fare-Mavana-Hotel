import { useContext, useEffect, useState } from 'react';
import styles from './RoomDetails.module.css';
import * as roomServices from '../../services/roomService';
import * as commentServices from '../../services/commentsService'
import { Link, useNavigate, useParams } from 'react-router-dom';
import AuthContext from '../../context/authContext';
import { DeleteModal } from '../DeleteModal/DeleteModal';

export default function RoomDetails() {
    const { userId, token, username } = useContext(AuthContext);
    const navigate = useNavigate();

    let roomId = useParams();
    roomId = roomId.id;
    const [roomData, setRoomData] = useState({});
    const [comments, setComments] = useState([]);
    const [isDeleteModal, setIsDeleteModal] = useState(false);
    

    useEffect(() => {
        roomServices.getOne(roomId)
            .then(result => {
                //  console.log(result);
                setRoomData(result)
            });

        commentServices.getRoomComments(roomId)
            .then(result => {
                console.log(result);
                setComments(result)
            });
    }, [roomId]);

    const addCommentHabdler = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const newComment = await commentServices.create(roomId, username, token, formData.get('comment'));
        setComments(state => [...state, newComment]);
    }

    const deleteHandler = async () => {
        const responce = await roomServices.deleteRoom(roomId, token);
        navigate('/roomsCatalog');

    }

    const handleDelete = () => {
        setIsDeleteModal(true);
    }

    const handleCancelDelete = () => {
        setIsDeleteModal(false);
        
    }

    const confirmDeleteTrip = () => {
        try {
            const responce =  roomServices.deleteRoom(roomId, token);
            navigate('/roomsCatalog');
            setIsDeleteModal(false);
           
        } catch (error) {
            console.log('Error deleting trip', error);
        }
    }

    return (

        <div className={styles.detailsContainer}>
            <div className={styles.detailsHeader}>
                <h1>{roomData.title}</h1>
                <div className={styles.buttons}>

                    <Link to="/roomsCatalog" className={styles.editBtn}>Back to Rooms List</Link>
                    {roomData._ownerId === userId && (
                        <>
                            <Link to={`/rooms/${roomId}/edit`} className={styles.editBtn}>Edit Room Info</Link>
                            <button onClick={handleDelete}>Delete Room</button>
                        </>
                    )}

                </div>
            </div>

            <div className={styles.roomDetails}>
                <div className={styles.roomInfo}>
                    <div className={styles.row}>
                        <p>Total Flat Space</p>
                        <p><b>{roomData.space} sqm</b></p>
                    </div>
                    <div className={styles.row}>
                        <p>Floor number</p>
                        <p><b>{roomData.floor}</b></p>
                    </div>
                    <div className={styles.row}>
                        <p>Parking Available</p>
                        <p><b>Yes</b></p>
                    </div>
                    <div className={styles.row}>
                        <p>Payment Process</p>
                        <p><b>Bank</b></p>
                    </div>
                </div>

                <div className={styles.image}>
                    <img src={roomData.imageUrl} alt="" />
                </div>

                <div className={styles.details}>
                    <h2>All Info About Apartment</h2>
                    <p>{roomData.description}</p>
                </div>
            </div>

            <div className={styles.commentsSection}>
                <h2>Comments:</h2>
                <ul>
                    {comments.map(({ _id, text, username }) => (
                        <li key={_id} className={styles.comment}>
                            <p><b>{username}</b> :   {text}</p>
                        </li>
                    ))}
                </ul>

                {comments.length === 0 && (
                    <p className="no-comment">No comments yet.</p>
                )}

                <article className={styles.addComment} >

                    <form className="form" onSubmit={addCommentHabdler}>
                        <label htmlFor='textarea'><b>Add Your Comment Here:</b></label>
                        <textarea name="comment" placeholder='You can write your comment here ...' cols="30" rows="10"></textarea>
                        <input type="submit" className={styles.btn} value='Add comment' />
                    </form>
                </article>

            </div>

            {isDeleteModal
                ? < DeleteModal isCancel={handleCancelDelete} isConfirm={confirmDeleteTrip} />
                : null
            }
            
        </div>




    )
}