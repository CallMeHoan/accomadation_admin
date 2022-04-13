import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import './styles.css'
import image1 from '../../assets/hotels/hotel_room.png'
import { Link } from 'react-router-dom'
import { usePostAccomadation } from '../../queries/useAccomadation.queries'

const NewAccomadattion = () => {
	const onPostAccomadation = usePostAccomadation()
	const [info, setInfo] = useState({
		name: '',
		image_Url: '',
		title: '',
		description: '',
		toilets: '',
		wifi: '',
		floor: '',
		area: '',
		price: '',
		available: '',
	})
	return (
		<div className='DetailAccomadation'>
			<section className='info_container'>
				<input
					type='text'
					className='info_name'
					onChange={(e) => setInfo({ ...info, name: e.target.value })}
				/>
				<div className='info_pictiure'>
					<input type='text' onChange={(e) => setInfo({ ...info, image_Url: e.target.value })} />
				</div>
				<input
					type='text'
					className='info_title'
					onChange={(e) => setInfo({ ...info, title: e.target.value })}
				/>
				<input
					type='text'
					className='info_description'
					onChange={(e) => setInfo({ ...info, description: e.target.value })}
				/>
				<div className='info_details_book'>
					<div className='info_details'>
						<div className='all_details'>
							<input
								type='text'
								className='detail'
								onChange={(e) => setInfo({ ...info, toilets: e.target.value })}
							/>
							<input
								type='text'
								className='detail'
								onChange={(e) => setInfo({ ...info, wifi: e.target.value })}
							/>
							<input
								type='text'
								className='detail'
								onChange={(e) => setInfo({ ...info, floor: e.target.value })}
							/>
							<input
								type='text'
								className='detail'
								onChange={(e) => setInfo({ ...info, people: e.target.value })}
							/>
							<input
								type='text'
								className='detail'
								onChange={(e) => setInfo({ ...info, area: e.target.value })}
							/>
							<input
								type='text'
								className='detail'
								onChange={(e) => setInfo({ ...info, descrpriceiption: e.target.value })}
							/>
							<input
								type='text'
								className='detail'
								onChange={(e) => setInfo({ ...info, available: e.target.value })}
							/>
						</div>
					</div>
					<div className='book_now_container'>
						<div className='book_price'>Create new or Return</div>
						<div
							className='book_btn'
							onClick={() => {
								onPostAccomadation(info)
							}}
						>
							New Accomadation
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
								<img src={info.image_Url}></img>
							</div>
							<div className='picture_container'>
								<img src={info.image_Url}></img>
							</div>
							<div className='picture_container'>
								<img src={info.image_Url}></img>
							</div>
							<div className='picture_container'>
								<img src={info.image_Url}></img>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default NewAccomadattion
