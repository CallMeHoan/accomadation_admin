import React from 'react'
import { useParams } from 'react-router-dom'
import './styles.css'
import { Link } from 'react-router-dom'
import { useGetAccomadationById } from '../../queries/useAccomadation.queries'

const DetailAccomdation = () => {
	const params = useParams()
	const id = params.id
	const { data } = useGetAccomadationById(id)
	console.log(data)
	return (
		<div className='DetailAccomadation'>
			<section className='info_container'>
				<div className='info_name'>{data?.data.name}</div>
				<div className='info_pictiure'>
					<img src={data?.data.image_Url} alt='image' />
				</div>
				<div className='info_title'>{data?.title}</div>
				<div className='info_description'>{data?.description}</div>
				<div className='info_details_book'>
					<div className='info_details'>
						<div className='all_details'>
							<div className='detail'>Toilets :{data?.toilets}</div>
							<div className='detail'>
								Wifi :{data?.wifi ? <span>Available</span> : <span>Unavailable</span>}
							</div>
							<div className='detail'>Floor :{data?.data.floor}</div>
							<div className='detail'>People :{data?.data.people}</div>
							<div className='detail'>Area :{data?.data.area}</div>
							<div className='detail'>Price :{data?.data.price}</div>
							<div className='detail'>Available :{data?.data.available}</div>
						</div>
					</div>
					<div className='book_now_container'>
						<div className='book_price'>Edit this rooms or Return</div>
						<div className='book_btn'>Edit</div>
						<div className='book_btn'>
							<Link className='link' to='/all-accomadations'>
								All Accomadations
							</Link>
						</div>
					</div>
				</div>
				<div className='Gallary_place'>
					<div className='Gallary_title'>Gallary</div>
					<div className='Gallary_picture'>
						<div className='pictures'>
							<div className='picture_container'>
								<img src={data?.data.image_Url}></img>
							</div>
							<div className='picture_container'>
								<img src={data?.data.image_Url}></img>
							</div>
							<div className='picture_container'>
								<img src={data?.data.image_Url}></img>
							</div>
							<div className='picture_container'>
								<img src={data?.data.image_Url}></img>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default DetailAccomdation
