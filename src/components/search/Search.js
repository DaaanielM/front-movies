import React from 'react';
import styles from '../../styles/Search.module.css';

function Search() {
	return (
		<form className={styles.container}>
			<input
				className={styles.search}
				type='search'
				placeholder='Busca la película'
				// Actualizamos el estado del input
				// onChange={(e) => setSearch(e.target.value)}
				// value={search}
			/>
		</form>
	);
}

export default Search;
