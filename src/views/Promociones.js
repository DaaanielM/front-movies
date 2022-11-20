import React from 'react';
import styles from '../styles/Container.module.css';
import Banners from '../components/promociones/Banners';
import Nav from '../components/menu/Nav';
import Footer from '../components/footer/Footer';
function Promociones() {
	return (
		<>
			<Nav />
			<div className={styles.content}>
				<div className={styles.main}>
					<h1 className={styles.text}>
						NUESTRAS{' '}
						<span className={styles.estreno}>PROMOCIONES</span>
					</h1>
					<Banners />
				</div>
			</div>
			<Footer />
		</>
	);
}

export default Promociones;
