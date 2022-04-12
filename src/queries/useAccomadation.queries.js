import { useQuery } from 'react-query'
import { API_KEY } from '../constants/API'

export const useGetAccomadation = () => {
	return useQuery(['useGetAccomadation'], async () => {
		const res = await fetch(`${API_KEY}/accomadations`)
		const response = res.json()
		return response
	})
}
export const usePostAccomadation = () => {
	return (data) => {
		fetch(`${API_KEY}/accomadations`, {
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
		fetch(`${API_KEY}/accomadations/${id}`, {
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
		fetch(`${API_KEY}/accomadations/${id}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((res) => res.json())
			.then(console.log)
	}
}
