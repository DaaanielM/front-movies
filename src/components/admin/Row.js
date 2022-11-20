import React, { useState } from 'react';
import styles from '../../styles/Admin.module.css';

import { deletePelicula, updatePelicula } from '../../services/FormPelis';
import { Button } from '@mui/material';

function Row({ item, reloadData }) {
	const [form, setForm] = useState({
		id: item.id,
		img: item.img,
		nombre: item.nombre,
		duracion: item.duracion,
		descripcion: item.descripcion,
		fecha: item.fecha,
		id_genero: item.id_genero,
		id_pais: item.id_pais,
		id_director: item.id_director,
		reparto: item.reparto,
	});

	const changeForm = (field, value) => {
		setForm({
			...form, //se copia el estado actual del formulario
			[field]: value, //se actualiza el valor del campo que se está modificando
		});
	};

	const submit = async (id) => {
		await updatePelicula(form, id);
		alert('Película actualizada');
	};

	const handleDelete = async (id) => {
		await deletePelicula(id);
		await reloadData();
	};

	return (
		<>
			<tr onSubmit={submit}>
				<th>{item.id}</th>
				<td className={styles.mensaje}>
					<input
						type='text'
						className={styles.input}
						onChange={(e) => changeForm('img', e.target.value)}
						value={form.img}
					/>
				</td>
				<td>
					<input
						type='text'
						className={styles.input}
						onChange={(e) => changeForm('nombre', e.target.value)}
						value={form.nombre}
					/>
				</td>
				<td>
					<input
						type='text'
						className={styles.input}
						onChange={(e) => changeForm('duracion', e.target.value)}
						value={form.duracion}
					/>
				</td>
				<td>
					<input
						type='text'
						className={styles.input}
						value={form.fecha}
						onChange={(e) => changeForm('fecha', e.target.value)}
					/>
				</td>
				<td>
					<input
						type='text'
						className={styles.description}
						value={form.descripcion}
						onChange={(e) =>
							changeForm('descripcion', e.target.value)
						}
					/>
				</td>

				<td className={styles.mensaje}>
					<input
						type='number'
						className={styles.input}
						onChange={(e) => changeForm('genero', e.target.value)}
						value={form.id_genero}
					/>
				</td>
				<td>
					<input
						type='number'
						className={styles.input}
						onChange={(e) => changeForm('pais', e.target.value)}
						value={form.id_pais}
					/>
				</td>
				<td>
					<input
						type='number'
						className={styles.input}
						onChange={(e) => changeForm('director', e.target.value)}
						value={form.id_director}
					/>
				</td>

				<td>
					<input
						type='text'
						className={styles.input}
						onChange={(e) => changeForm('reparto', e.target.value)}
						value={form.reparto}
					/>
				</td>

				<td className={styles.actions}>
					<Button variant='text' onClick={() => submit(item.id)}>
						Editar
					</Button>
					<Button
						variant='text'
						color='error'
						onClick={() => handleDelete(item.id)}>
						Eliminar
					</Button>
				</td>
			</tr>
		</>
	);
}

export default Row;
