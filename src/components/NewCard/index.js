import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import './styles.css'
import logo from '../../assets/logo/logo_new.png'
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
			<section className='logo'>
				<img src={logo}></img>
			</section>
			<section className='title'> ADD A NEW ACCOMADATION INTO OUR LIST</section>
			<section className='info_container'>
				<div className='info_details_book'>
					<div className='info_details'>
						<div className='all_details'>
							<h2>Accomadation's name: </h2>
							<input
								type='text'
								className='detail'
								onChange={(e) => setInfo({ ...info, name: e.target.value })}
							/>
							<h2>Accomadation's Title: </h2>
							<input
								type='text'
								className='detail'
								onChange={(e) => setInfo({ ...info, title: e.target.value })}
							/>
							<h2>Picture Url: </h2>
							<input
								type='text'
								className='detail'
								onChange={(e) => setInfo({ ...info, image_Url: e.target.value })}
							/>
							<h2>Number of Toilets: </h2>
							<input
								type='text'
								className='detail'
								onChange={(e) => setInfo({ ...info, toilets: e.target.value })}
							/>
							<h2>Wifi's access: </h2>
							<input
								type='text'
								className='detail'
								onChange={(e) => setInfo({ ...info, wifi: e.target.value })}
							/>
							<h2>Number of floors: </h2>
							<input
								type='text'
								className='detail'
								onChange={(e) => setInfo({ ...info, floor: e.target.value })}
							/>
							<h2>Number of people: </h2>
							<input
								type='text'
								className='detail'
								onChange={(e) => setInfo({ ...info, people: e.target.value })}
							/>
							<h2>Area: </h2>
							<input
								type='text'
								className='detail'
								onChange={(e) => setInfo({ ...info, area: e.target.value })}
							/>
							<h2>Description: </h2>
							<input
								type='text'
								className='detail'
								onChange={(e) => setInfo({ ...info, descrpriceiption: e.target.value })}
							/>
							<h2>Available or not: </h2>
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
								console.log(info)
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
			</section>
		</div>
	)
}

export default NewAccomadattion
