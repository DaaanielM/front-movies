import React from 'react';
import GridEstrenos from '../components/estrenos/GridEstrenos';

import styles from '../styles/Container.module.css';
function Proximamente() {
	return (
		<>
			<div className={styles.content}>
				<div className={styles.main}>
					<h1 className={styles.text}>
						PRÓXIMOS{' '}
						<span className={styles.estreno}>ESTRENOS</span>
					</h1>
					<GridEstrenos />
				</div>
			</div>
		</>
	);
}

export default Proximamente;
