import React from 'react';
import GridCartelera from '../components/cartelera/GridCartelera';

import Search from '../components/search/Search';
import styles from '../styles/Container.module.css';
function Home() {
	return (
		<>
			<div className={styles.content}>
				<div className={styles.main}>
					{/* <Search /> */}
					<GridCartelera />
				</div>
			</div>
		</>
	);
}

export default Home;
