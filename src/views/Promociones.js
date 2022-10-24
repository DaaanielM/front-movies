import React from 'react';
import styles from '../styles/Container.module.css';
import Banners from '../components/promociones/Banners';
function Promociones() {
	return (
		<>
			<div className={styles.content}>
				<div className={styles.main}>
					<h1 className={styles.text}>
						NUESTRAS{' '}
						<span className={styles.estreno}>PROMOCIONES</span>
					</h1>
					<Banners />
				</div>
			</div>
		</>
	);
}

export default Promociones;
