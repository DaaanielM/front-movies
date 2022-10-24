import React from 'react';
import styles from '../../styles/Promociones.module.css';
import img1 from '../../images/Promo-Lunes.png';
import img2 from '../../images/Promo-CumpleCF.png';
import img3 from '../../images/Promo-JuevesCF.png';
import img4 from '../../images/Promo-MM.png';

function Banners() {
	return (
		<>
			<div className={styles.content}>
				<img className={styles.banner1} src={img1} alt='Cargando...' />
				<img className={styles.banner2} src={img2} alt='Cargando...' />
				<img className={styles.banner3} src={img3} alt='Cargando...' />
				<img className={styles.banner4} src={img4} alt='Cargando...' />
			</div>
		</>
	);
}

export default Banners;
