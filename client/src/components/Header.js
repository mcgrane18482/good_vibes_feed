import { NavLink } from 'react-router-dom';
import axios from 'axios';

export default function Header(props) {
    const logout = async e => {
        e.preventDefault();

        await axios.get('/api/logout');

        props.setState((oldState) => {
            return {
                ...oldState,
                user: null
            }
        })
    }

    return (
        <header className="row justify-between align-center">
      
            <h1 className='text-center'>Good Vibes Feed</h1>

            <nav className="row">
                {props.state.user && <p className="header-username">Welcome, {props.state.user.username}</p>}
                <NavLink to="/">Home</NavLink>
                {props.state.user ? (
                    <>
                        <NavLink to="/dashboard">Dashboard</NavLink>
                        <NavLink onClick={logout} to="/logout">Log Out</NavLink>
                    </>
                ) : (
                    <NavLink to="/auth">Login or Register</NavLink>
                )}
            </nav>
        </header>
    )
}