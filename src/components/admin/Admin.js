import React, { useEffect, useState } from 'react';
import Nav from '../../components/menu/Nav';
import Title from '../../components/admin/Title';
import styles from '../../styles/Admin.module.css';
import { getPeliculas } from '../../services/FormPelis';
import Row from './Row';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
function Admin() {
	const [list, setList] = useState([]);
	const loadPeliculas = async () => {
		const datos = await getPeliculas();
		console.log(datos);
		setList(datos.data.datos);
	};

	// useEffect es un hook que se ejecuta cuando el componente se renderiza
	useEffect(() => {
		loadPeliculas();
	}, []);
	return (
		<>
			<Nav />

			<Title />
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label='simple table'>
					<TableHead>
						<TableRow>
							<TableCell>ID</TableCell>
							<TableCell align='center'>Imagen</TableCell>
							<TableCell align='center'>Nombre</TableCell>
							<TableCell align='center'>Duración</TableCell>
							<TableCell align='center'>Fecha</TableCell>
							<TableCell align='center'>Descripción </TableCell>
							<TableCell align='center'>Genero</TableCell>
							<TableCell align='center'>País</TableCell>
							<TableCell align='center'>Director</TableCell>
							<TableCell align='center'>Reparto</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{list.map((item) => (
							<Row
								item={item}
								key={item.id}
								sx={{
									'&:last-child td, &:last-child th': {
										border: 0,
									},
								}}
							/>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
}

export default Admin;
