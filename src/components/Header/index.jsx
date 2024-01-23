
import { NavLink, Link } from 'react-router-dom'


import logo from '../../assets/logo.svg'




function Header() {

	return (
		<header className="nav-wrapper">
			<Link to="/">
				<img
					src={logo}
					alt="SportSee Logo"
					className="nav-logo vertical-center"
				/>
			</Link>
			<nav className="nav vertical-center">
				<NavLink
					className={({ isActive }) =>
						isActive ? 'nav-active' : 'nav-link'
					}
					to="/"
				>
					Accueil
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive ? 'nav-active' : 'nav-link'
					}
					to={`/Profil/`+ localStorage.getItem('user')}
				>
					Profil
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive ? 'nav-active' : 'nav-link'
					}
					to="/Settings"
				>
					Réglages
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive ? 'nav-active' : 'nav-link'
					}
					to="/Community"
				>
					Communauté
				</NavLink>
			</nav>
		</header>
	)
}

export default Header