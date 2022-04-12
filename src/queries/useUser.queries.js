import { useQuery } from 'react-query'
import { API_KEY } from '../constants/API'

export const useGetUsers = () => {
	return useQuery(['useGetUsers'], async () => {
		const res = await fetch(`${API_KEY}/users`)
		const response = res.json()
		return response
	})
}
