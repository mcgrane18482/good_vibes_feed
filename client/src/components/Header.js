import { NavLink } from 'react-router-dom';
import axios from 'axios';

export default function Header(props) {
    const logout = async e => {
        e.preventDefault();

        await axios.get('/user/logout');

        props.setState((oldState) => {
            return {
                ...oldState,
                user: null
            }
        })
    }

    return (
        <header className="row justify-between align-center">

            <NavLink to="/" className="header-title-link">
                <h1 className='text-center'>Good Vibes Feed</h1>
            </NavLink>

            <nav className="row">
                {props.state.user && <p className="header-username">Welcome, {props.state.user.username}</p>}
                <NavLink className="transition duration-300 hover:text-blue-600" to="/">Home</NavLink>
                <NavLink className="transition duration-300 hover:text-blue-600" to="/support">Support Us</NavLink>
                {props.state.user ? (
                    <>
                        {/* <NavLink className="transition duration-300 hover:text-blue-600" to="/dashboard">Dashboard</NavLink> */}
                        <NavLink className="transition duration-300 hover:text-blue-600" onClick={logout} to="/logout">Log Out</NavLink>
                    </>
                ) : (
                    <NavLink className="transition duration-300 hover:text-blue-600" to="/auth">Login or Register</NavLink>
                )}
            </nav>
        </header>
    )
}