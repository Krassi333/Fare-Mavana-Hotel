import { Link } from "react-router-dom"

export default function Header() {
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
                        <li><Link to="/addRoom">Add Room</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Register</Link></li>
                        <li><Link to="/logout">Logout</Link></li>

                    </ul>
                </nav>

            </div>

        </>
    )
}