import React from 'react';
import styles from '../../styles/Cartelera.module.css';
import img0 from '../../images/estreno1.jpg';
import img1 from '../../images/jurasic xd.webp';
import img2 from '../../images/god.jpg';
import img4 from '../../images/m4.jpg';
import img5 from '../../images/m3.jpg';
import img6 from '../../images/venom.webp';
function Estrenos() {
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
						<h4 className={styles.name}>7 HORAS PARA ENAMORARTE</h4>
					</div>
					<div className={styles.dates}>
						<p className={styles.rol}>Amor, Aventura</p>
					</div>
				</div>
			</div>
			<div className={styles.mainCard}>
				<div className={styles.card}>
					<img
						className={styles.image}
						src={img1}
						alt='Cargando...'
					/>
					<div className={styles.content}>
						<h4 className={styles.name}>JURASSIC WORLD 3</h4>
					</div>
					<div className={styles.dates}>
						<p className={styles.rol}>Acción, Misterio</p>
					</div>
				</div>
			</div>
			<div className={styles.mainCard}>
				<div className={styles.card}>
					<img
						className={styles.image}
						src={img2}
						alt='Cargando...'
					/>
					<div className={styles.content}>
						<h4 className={styles.name}>GODZILLA</h4>
					</div>
					<div className={styles.dates}>
						<p className={styles.rol}>Acción, Fantasia</p>
					</div>
				</div>
			</div>
			<div className={styles.mainCard}>
				<div className={styles.card}>
					<img
						className={styles.image}
						src={img4}
						alt='Cargando...'
					/>
					<div className={styles.content}>
						<h4 className={styles.name}>Hollywood</h4>
					</div>
					<div className={styles.dates}>
						<p className={styles.rol}>Comedia, Aventura</p>
					</div>
				</div>
			</div>
			<div className={styles.mainCard}>
				<div className={styles.card}>
					<img
						className={styles.image}
						src={img5}
						alt='Cargando...'
					/>
					<div className={styles.content}>
						<h4 className={styles.name}>
							SONIC 2: EL RETORNO DE LA FUERZA
						</h4>
					</div>
					<div className={styles.dates}>
						<p className={styles.rol}>Acción, Animada</p>
					</div>
				</div>
			</div>
			<div className={styles.mainCard}>
				<div className={styles.card}>
					<img
						className={styles.image}
						src={img6}
						alt='Cargando...'
					/>
					<div className={styles.content}>
						<h4 className={styles.name}>Venom</h4>
					</div>
					<div className={styles.dates}>
						<p className={styles.rol}>Acción, Terror</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default Estrenos;
