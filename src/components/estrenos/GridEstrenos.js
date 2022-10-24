import React from 'react';
import Estrenos from '../../components/estrenos/Estrenos';
import styles from '../../styles/GridCartelera.module.css';
function GridEstrenos() {
	return (
		<>
			<div className={styles.container}>
				<Estrenos />
			</div>
		</>
	);
}

export default GridEstrenos;
