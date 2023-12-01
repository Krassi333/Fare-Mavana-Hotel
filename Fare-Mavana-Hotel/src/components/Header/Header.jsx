import { useContext } from "react"
import { Link } from "react-router-dom"
import AuthContext from "../../context/authContext";

export default function Header() {
    const { isAuthenticated, username } = useContext(AuthContext);

    return (
        <>
            <div className="nav-container">
                <h1>
                    <span>Fare Mavana Hotel</span> </h1>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/roomsCatalog">Rooms and Suites</Link></li>
                        <li><Link to="/restaurant">Ambrozia Reataurant</Link></li>
                        {isAuthenticated && (
                            <>
                                <li><Link to="/addRoom">Add Room</Link></li>
                                <li><Link to="/logout">Logout</Link></li>
                            </>
                        )}

                        {!isAuthenticated && (
                            <>
                                <li><Link to="/login">Login</Link></li>
                                <li><Link to="/register">Register</Link></li>
                            </>
                        )}



                    </ul>
                </nav>

            </div>

        </>
    )
}