import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import './styles.css'
import { Link } from 'react-router-dom'
import { useGetAccomadationById, usePutAccomadation } from '../../queries/useAccomadation.queries'

const DetailAccomdation = () => {
	const params = useParams()
	const id = params.id
	const { data } = useGetAccomadationById(id)
	console.log(data)
	const [info, setInfo] = useState({
		name: data?.name,
		address: data?.address,
		area: data?.area,
		available: data?.available,
		floor: data?.floor,
		image_Url: data?.image_Url,
		people: data?.people,
		price: data?.price,
		rooms: data?.rooms,
		toilets: data?.toilets,
		wifi: data?.wifi,
	})
	console.log(info.name)

	return (
		<div className='DetailAccomadation'>
			{/* <section className='info_container'>
				<input
					type='text'
					className='info_name'
					value={data?.name}
					onChange={(e) => setInfo({ ...info, name: e.target.value })}
				/>
				<div className='info_pictiure'>
					<input
						type='text'
						value={info.image_Url}
						onChange={(e) => setInfo({ ...info, image_Url: e.target.value })}
					/>
				</div>
				<input
					type='text'
					className='info_title'
					value={info.title}
					onChange={(e) => setInfo({ ...info, title: e.target.value })}
				/>
				<input
					type='text'
					className='info_description'
					value={info.description}
					onChange={(e) => setInfo({ ...info, description: e.target.value })}
				/>
				<div className='info_details_book'>
					<div className='info_details'>
						<div className='all_details'>
							<input
								type='text'
								value={info.toilets}
								className='detail'
								onChange={(e) => setInfo({ ...info, toilets: e.target.value })}
							/>
							<input
								type='text'
								value={info.wifi}
								className='detail'
								onChange={(e) => setInfo({ ...info, wifi: e.target.value })}
							/>
							<input
								type='text'
								className='detail'
								value={info.floor}
								onChange={(e) => setInfo({ ...info, floor: e.target.value })}
							/>
							<input
								type='text'
								className='detail'
								value={info.people}
								onChange={(e) => setInfo({ ...info, people: e.target.value })}
							/>
							<input
								type='text'
								className='detail'
								value={info.area}
								onChange={(e) => setInfo({ ...info, area: e.target.value })}
							/>
							<input
								type='text'
								className='detail'
								value={info.price}
								onChange={(e) => setInfo({ ...info, descrpriceiption: e.target.value })}
							/>
							<input
								type='text'
								className='detail'
								value={info.available}
								onChange={(e) => setInfo({ ...info, available: e.target.value })}
							/>
						</div>
					</div>
					<div className='book_now_container'>
						<div className='book_price'>Edit this rooms or Return</div>
						<div
							className='book_btn'
							onClick={() => {
								console.log(info)
							}}
						>
							Update
						</div>
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
								<img src={this.info.image_Url}></img>
							</div>
							<div className='picture_container'>
								<img src={this.info.image_Url}></img>
							</div>
							<div className='picture_container'>
								<img src={this.info.image_Url}></img>
							</div>
							<div className='picture_container'>
								<img src={this.info.image_Url}></img>
							</div>
						</div>
					</div>
				</div>
			</section> */}
		</div>
	)
}

export default DetailAccomdation
