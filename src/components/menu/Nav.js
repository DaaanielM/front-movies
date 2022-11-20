import React from 'react';
import styles from '../../styles/Nav.module.css';
import { Link } from 'react-router-dom';
import Logo from '../../images/carrete.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faDollarSign,
	faSignInAlt,
	// faTable,
	faIndent,
} from '@fortawesome/free-solid-svg-icons';

function Nav() {
	return (
		<>
			<nav className={styles.navbar}>
				<label className={styles.logo}>
					<Link to={'/'} className={styles.link}>
						<img className={styles.burger} src={Logo} alt='' />
						<span className={styles.movies}>Royal Movies</span>
					</Link>
				</label>
				<ul className={styles.logoul}>
					<li className={styles.logoli}>
						<Link to={'/'} className={styles.logolink}>
							<FontAwesomeIcon
								icon={faIndent}
								className={styles.fontIcon}
							/>
							Cartelera
						</Link>
					</li>
					{/* <li className={styles.logoli}>
						<Link to={'/Proximamente'} className={styles.logolink}>
							<FontAwesomeIcon
								icon={faTable}
								className={styles.fontIcon}
							/>
							Próximamente
						</Link>
					</li> */}
					<li className={styles.logoli}>
						<Link to={'/promociones'} className={styles.logolink}>
							<FontAwesomeIcon
								icon={faDollarSign}
								className={styles.fontIcon}
							/>
							Promociones
						</Link>
					</li>

					<li className={styles.logoli}>
						<Link to={'/admin'} className={styles.logolink}>
							<FontAwesomeIcon
								icon={faSignInAlt}
								className={styles.fontIcon}
							/>
							Admin
						</Link>
					</li>
				</ul>
			</nav>
		</>
	);
}

export default Nav;
