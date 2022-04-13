import React, { useEffect, useState } from 'react'
import { useGetAccomadationById, usePutAccomadation } from '../../queries/useAccomadation.queries'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { API_KEY } from '../../constants/API'
import { DetailAccomdation } from '../../components/EditCard'

const Editpage = () => {
	const params = useParams()
	const id = params.id
	const { data } = useGetAccomadationById(id)
	console.log(data)

	return (
		<div className='edit__container'>
			<DetailAccomdation
				name={data?.name}
				image_Url={data?.image_Url}
				title={data?.title}
				description={data?.description}
				toilets={data?.toilets}
				wifi={data?.wifi}
				floor={data?.floor}
				people={data?.people}
				price={data?.price}
				area={data?.area}
				available={data?.available}
			/>
		</div>
	)
}
export default Editpage
