import { Link } from 'react-router-dom'

import classes from './MainNavigation.module.css'

const MainNavigation = () => {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>Awesome Pets</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>All Pets</Link>
                    </li>
                    <li>
                        <Link to='/new-meetup'>Add New Pet</Link>
                    </li>
                    <li>
                        <Link to='/favorites'>My Favorites</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation
