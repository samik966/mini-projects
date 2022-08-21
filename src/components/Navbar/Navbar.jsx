import { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import { ROUTE_PATHS } from 'Router'
import style from './Navbar.module.css'

const Navbar = () => {
	return (
		<header className={style.header}>
			<div className={style.logo}>
				<h3>LOGO</h3>
			</div>
			<nav className={style.navbar}>
				{ROUTE_PATHS.map((route, i) => (
					<Fragment key={route.path}>
						<NavLink
							className={({ isActive }) =>
								isActive ? style.activeLink : style.navlink
							}
							to={route.path}
						>
							{route.title}
						</NavLink>
						{i < ROUTE_PATHS.length - 1 && '|'}
					</Fragment>
				))}
			</nav>
		</header>
	)
}

export default Navbar
