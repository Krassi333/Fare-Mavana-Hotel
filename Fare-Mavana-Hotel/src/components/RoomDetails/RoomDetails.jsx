import { useEffect, useState } from 'react';
import styles from './RoomDetails.module.css';
import * as gameServices from '../../services/roomService';
import * as commentServices from '../../services/commentsService'
import { useParams } from 'react-router-dom';

export default function RoomDetails() {
    let gameId = useParams();
    gameId = gameId.id;
    const [gameData, setGameData] = useState({});
    const [comments,setComments]=useState([]);

    useEffect(() => {
        gameServices.getOne(gameId)
            .then(result => {
              //  console.log(result);
                setGameData(result)
            });

            commentServices.getGameComments(gameId)
            .then(result => {
                //console.log(result);
                setComments(result)});
    }, [gameId]);

    const addCommentHabdler = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

       const newComment= await commentServices.create(gameId, formData.get('username'), formData.get('comment'));
       
       setComments(state => [...state,newComment]);
    }

    return (

        <div className={styles.detailsContainer}>
            <div className={styles.detailsHeader}>
                <h1>{gameData.title}</h1>
                <div className={styles.buttons}>
                    <button>Suites</button>
                    <button>Rooms</button>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            </div>

            <div className={styles.roomDetails}>
                <div className={styles.roomInfo}>
                    <div className={styles.row}>
                        <p>Total Flat Space</p>
                        <p><b>{gameData.space} m2</b></p>
                    </div>
                    <div className={styles.row}>
                        <p>Floor number</p>
                        <p><b>{gameData.floor}</b></p>
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
                    <img src={gameData.imageUrl} alt="" />
                </div>

                <div className={styles.details}>
                    <h2>All Info About Apartment</h2>
                    <p>{gameData.description}</p>
                </div>
            </div>

            <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {comments.map(({ _id, username, text }) => (
                            <li key={_id} className="comment">
                                <p>{username}: {text}</p>
                            </li>
                        ))}
                    </ul>

                    {comments.length === 0 && (
                        <p className="no-comment">No comments.</p>
                    )}
                </div>

            <article className={styles.addComment} >
                <label htmlFor='form'>Add new comment:</label>
                <form className="form" onSubmit={addCommentHabdler}>
                    <input type="text" name="username"/>
                    <textarea name="comment" placeholder='You can write your comment here ...' cols="30" rows="10"></textarea>
                    <input type="submit" className={styles.btn} value='Add comment' />
                </form>
            </article>

        </div>




    )
}