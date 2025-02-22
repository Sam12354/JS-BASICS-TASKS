import { Link, useNavigate, useParams } from "react-router-dom";
import { useGetOneItem } from "../../hooks/userService.js";
import { del } from "../../api/requester.js";
import GameEdit from "../game-edit/EditGame.jsx";

export default function GameDetails() {

    const { itemId } = useParams()
    const [item, setItem] = useGetOneItem(itemId)

    const navigate = useNavigate()

    const itemDeleteHandler = async () => {
        try {
            await del(itemId)
            navigate('/')
        } catch (err) {
            console.log(err.message)
        }
    }

    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">

                <div className="game-header">
                    <img className="game-img" src={item.imageUrl} />
                    <h1>{item.title}</h1>
                    <span className="levels">MaxLevel: {item.maxLevel}</span>
                    <p className="type">{item.category}</p>
                </div>

                <p className="text">
                    {item.description}
                </p>

                {/* <!-- Bonus ( for Guests and Users ) --> */}
                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {/* <!-- list all comments for current game (If any) --> */}
                        <li className="comment">
                            <p>Content: I rate this one quite highly.</p>
                        </li>
                        <li className="comment">
                            <p>Content: The best game.</p>
                        </li>
                    </ul>
                    {/* <!-- Display paragraph: If there are no games in the database --> */}
                    <p className="no-comment">No comments.</p>
                </div>

                {/* <!-- Edit/Delete buttons ( Only for creator of this game )  --> */}
                <div className="buttons">
                    <Link to={`/catalog/${itemId}/edit`} className="button">Edit</Link>
                    <a href="#" onClick={itemDeleteHandler} className="button">Delete</a>
                </div>
            </div>

            {/* <!-- Bonus -->
            <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) --> */}
            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form">
                    <textarea name="comment" placeholder="Comment......"></textarea>
                    <input className="btn submit" type="submit" value="Add Comment" />
                </form>
            </article>

        </section>
    )
}