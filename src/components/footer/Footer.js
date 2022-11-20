import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/Footer.module.css';
import {
	FaFacebook,
	FaInstagramSquare,
	FaWhatsappSquare,
} from 'react-icons/fa';

function Footer() {
	return (
		<footer className={styles.footerDistributed}>
			<div className={styles.footerLeft}>
				<h3>
					Royal<span>Movies</span>
				</h3>
				<p className={styles.footerLinks}>
					<Link to={'/Cartelera'} className={styles.linkUno}>
						Cartelera
					</Link>
					<Link to={'/Cartelera'}>Próximamente</Link>
					<Link to={'/Promociones'}>Promociones</Link>
					<Link to={'/Nosotros'}>Iniciar Sesión</Link>
				</p>
				<p className={styles.footerCompany}>Royal Movies © 2022</p>
			</div>
			<div className={styles.footerCenter}>
				<div>
					<i className='fa fa-map-marker' />
					<p>
						<span>Ave 26</span> Neiva, Huila
					</p>
				</div>
				<div>
					<i className='fa fa-phone' />
					<p>+57 321 555 5555</p>
				</div>
				<div>
					<i className='fa fa-envelope' />
					<p>
						<Link to={'/Cartelera'}>
							royal.movies@cineroyal.com
						</Link>
					</p>
				</div>
			</div>
			<div className={styles.footerRight}>
				<p className={styles.footerAbout}>
					<span>Redes</span>
					Siguenos en nuestras redes
				</p>
				<div className={styles.footerIcons}>
					<a href='#'>
						<FaFacebook />
					</a>
					<a href='#'>
						<FaInstagramSquare />
					</a>
					<a href='#'>
						<FaWhatsappSquare />
					</a>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
