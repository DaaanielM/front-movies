import React, { useEffect, useState } from 'react';
import Nav from '../../components/menu/Nav';
import { getPeliculas, addPelicula } from '../../services/FormPelis';
import Row from './Row';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};
function Admin() {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const [form, setForm] = useState({
		img: '',
		nombre: '',
		duracion: '',
		fecha: '',
		descripcion: '',
		id_genero: 0,
		id_pais: 0,
		id_director: 0,
		reparto: '',
	});

	const changeForm = (field, value) => {
		setForm({ ...form, [field]: value });
	};

	const submit = async (event) => {
		event.preventDefault(); // evita que se recargue la página
		const respuesta = await addPelicula(form);
		console.log(respuesta);
		// handleClose(true);
	};

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
			<Typography
				variant='h3'
				mt={2}
				mb={2}
				component='h3'
				align='center'
				color='primary'
				style={{
					fontWeight: 'bold',
				}}>
				Panel administrativo
			</Typography>
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
							<TableCell align='center'>Acciones</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{list.map((item) => (
							<Row
								item={item}
								key={item.id}
								reloadData={loadPeliculas}
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
			<div>
				<Button
					style={{ textAlign: 'center', width: '100%' }}
					variant='contained'
					onClick={handleOpen}>
					Agregar
				</Button>
				<Modal
					open={open}
					onClose={handleClose}
					aria-labelledby='modal-modal-title'
					aria-describedby='modal-modal-description'>
					<Box sx={style}>
						<Box
							component='form'
							sx={{
								'& .MuiTextField-root': { m: 1, width: '25ch' },
							}}
							noValidate
							autoComplete='off'>
							<Typography
								variant='h4'
								mt={2}
								mb={2}
								component='h4'
								align='center'
								style={{
									color: '#388e3c',
									fontWeight: 'bold',
								}}>
								AGREGAR PELÍCULA
							</Typography>
							<div>
								<TextField
									id='outlined-basic'
									label='Imagen'
									variant='outlined'
									style={{
										textAlign: 'center',
										width: '100%',
									}}
									onChange={(event) => {
										changeForm(
											'img',
											event.target.value // le pasamos el valor
										);
									}}
								/>

								<TextField
									id='outlined-basic'
									label='Nombre'
									variant='outlined'
									style={{
										textAlign: 'center',
										width: '100%',
									}}
									onChange={(event) => {
										changeForm(
											'nombre',
											event.target.value // le pasamos el valor
										);
									}}
								/>

								<TextField
									id='outlined-basic'
									label='Duración'
									variant='outlined'
									style={{
										textAlign: 'center',
										width: '100%',
									}}
									onChange={(event) => {
										changeForm(
											'duracion',
											event.target.value // le pasamos el valor
										);
									}}
								/>
								<TextField
									id='outlined-basic'
									label='Fecha'
									variant='outlined'
									style={{
										textAlign: 'center',
										width: '100%',
									}}
									onChange={(event) => {
										changeForm(
											'fecha',
											event.target.value // le pasamos el valor
										);
									}}
								/>

								<TextField
									id='outlined-basic'
									label='Descripción'
									variant='outlined'
									style={{
										textAlign: 'center',
										width: '100%',
									}}
									onChange={(event) => {
										changeForm(
											'descripcion',
											event.target.value // le pasamos el valor
										);
									}}
								/>

								<TextField
									id='filled-number'
									label='IDGenero'
									type='number'
									InputLabelProps={{
										shrink: true,
									}}
									variant='filled'
									style={{
										textAlign: 'center',
										width: '100%',
									}}
									onChange={(event) => {
										changeForm(
											'id_genero',
											event.target.value // le pasamos el valor
										);
									}}
								/>
								<TextField
									id='filled-number'
									label='IDPaís'
									type='number'
									InputLabelProps={{
										shrink: true,
									}}
									variant='filled'
									style={{
										textAlign: 'center',
										width: '100%',
									}}
									onChange={(event) => {
										changeForm(
											'id_pais',
											event.target.value // le pasamos el valor
										);
									}}
								/>
								<TextField
									id='filled-number'
									label='IDDirector'
									type='number'
									InputLabelProps={{
										shrink: true,
									}}
									variant='filled'
									style={{
										textAlign: 'center',
										width: '100%',
									}}
									onChange={(event) => {
										changeForm(
											'id_director',
											event.target.value // le pasamos el valor
										);
									}}
								/>
								<TextField
									id='outlined-basic'
									label='Reparto'
									variant='outlined'
									style={{
										textAlign: 'center',
										width: '100%',
									}}
									onChange={(event) => {
										changeForm(
											'reparto',
											event.target.value // le pasamos el valor
										);
									}}
								/>
							</div>
							<Button
								style={{
									textAlign: 'center',
									width: '100%',
								}}
								onClick={submit}
								color='success'
								variant='contained'>
								Agregar Película
							</Button>
						</Box>
					</Box>
				</Modal>
			</div>
		</>
	);
}

export default Admin;
