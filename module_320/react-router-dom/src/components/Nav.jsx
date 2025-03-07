import { Link } from 'react-router-dom';
import style from '../styles/Nav.module.css';

function Nav() {
    return (
        <nav className={style.nav}>
            <Link to="/">Home</Link>
            <Link to="/profile">Profile </Link>
        </nav>
    )
}

export default Nav;