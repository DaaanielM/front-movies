import axios from 'axios';

export const api = `http://localhost:4000/`;

export async function getPeliculas() {
	try {
		const respuesta = await axios({
			url: api + `info/listar`,
			method: 'GET',
		});
		return respuesta;
	} catch (error) {
		console.log(error);
	}
}
export async function getPelicula() {
	try {
		const respuesta = await axios({
			url: api + `peliculas/listar`,
			method: 'GET',
		});
		return respuesta;
	} catch (error) {
		console.log(error);
	}
}

export async function addPelicula(form) {
	try {
		const respuesta = await axios({
			url: api + `info/crear`,
			method: 'POST',

			data: form,
		});
		return respuesta;
	} catch (error) {
		console.log(error);
	}
}

export async function updatePelicula(form, id) {
	try {
		const respuesta = await axios({
			url: api + `info/actualizar/` + id,
			method: 'PUT',
			data: form,
		});
		return respuesta;
	} catch (error) {
		console.log(error);
	}
}

export async function deletePelicula(id) {
	try {
		const respuesta = await axios({
			url: api + `info/eliminar/` + id,
			method: 'DELETE',
		});
		return respuesta;
	} catch (error) {
		console.log(error);
	}
}
