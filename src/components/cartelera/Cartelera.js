import React from 'react';
import styles from '../../styles/Cartelera.module.css';
import { Link } from 'react-router-dom';
function Cartelera({ id, img, nombre, genero }) {
	return (
		<>
			<Link to={'/info/' + id}>
				{console.log(id)}
				<div className={styles.mainCard}>
					<img
						className={styles.image}
						src={'http://localhost:4000/img/' + img}
						alt='Cargando...'
					/>
					<div className={styles.content}>
						<h4 className={styles.name}>{nombre}</h4>
					</div>
					<div className={styles.dates}>
						<p className={styles.rol}>{genero}</p>
					</div>
				</div>
			</Link>
		</>
	);
}

export default Cartelera;
