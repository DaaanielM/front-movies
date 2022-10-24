import React from 'react';
import styles from '../../styles/Cartelera.module.css';
import img0 from '../../images/strange.jpg';

function Cartelera() {
	return (
		<>
			<div className={styles.mainCard}>
				<div className={styles.card}>
					<img
						className={styles.image}
						src={img0}
						alt='Cargando...'
					/>
					<div className={styles.content}>
						<h4 className={styles.name}>
							DOCTOR STRANGE EN EL MULTIVERSO DE LA LOCURA de
							Marvel
						</h4>
					</div>
					<div className={styles.dates}>
						<p className={styles.rol}>Acción, Aventura</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default Cartelera;
