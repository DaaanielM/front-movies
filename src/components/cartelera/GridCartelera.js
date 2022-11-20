import React, { useEffect, useState } from 'react';

import Cartelera from '../../components/cartelera/Cartelera';
import styles from '../../styles/GridCartelera.module.css';
import { getPelicula } from '../../services/FormPelis.js';

function GridCartelera() {
	const [pelicula, setPelicula] = useState([]);

	async function loadPelicula() {
		const datos = await getPelicula();
		console.log(datos);
		if (datos.status === 200) {
			setPelicula(datos.data.datos);
		}
	}
	useEffect(() => {
		loadPelicula();
	}, []);

	return (
		<div className={styles.container}>
			{pelicula.map((item) => (
				<Cartelera {...item} key={item.id} />
			))}
		</div>
	);
}

export default GridCartelera;
