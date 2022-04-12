import { useQuery } from 'react-query'
import { API_KEY } from '../constants/API'

export const useGetAccomadation = () => {
	return useQuery(['useGetAccomadation'], async () => {
		const res = await fetch(`http://localhost:8080/api/v1/accommodations`)
		const response = res.json()
		return response
	})
}

export const useGetAccomadationById = (id) => {
	return useQuery(['useGetAccomadationById'], async () => {
		const res = await fetch(`${API_KEY}/accommodations/${id}`)
		const response = res.json()
		return response
	})
}

export const usePostAccomadation = () => {
	return (data) => {
		fetch(`${API_KEY}/accommodations`, {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'content-type': 'application/json',
			},
		})
			.then((res) => res.json())
			.then(console.log)
	}
}

export const usePutAccomadation = (id) => {
	return (data) => {
		fetch(`${API_KEY}/accommodations/${id}`, {
			method: 'PUT',
			body: JSON.stringify(data),
			headers: {
				'content-type': 'application/json',
			},
		})
			.then((res) => res.json())
			.then(console.log)
	}
}

export const useDeleteAccomadation = (id) => {
	return () => {
		fetch(`${API_KEY}/accommodations/${id}`, {
			method: 'DELETE',
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((res) => res.json())
			.then(console.log)
	}
}
