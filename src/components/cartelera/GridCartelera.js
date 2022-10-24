import React from 'react';
import Cartelera from '../../components/cartelera/Cartelera';
import styles from '../../styles/GridCartelera.module.css';
function GridCartelera() {
	return (
		<>
			<div className={styles.container}>
				<Cartelera />
			</div>
		</>
	);
}

export default GridCartelera;
