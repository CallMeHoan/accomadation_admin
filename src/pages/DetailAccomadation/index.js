import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import YouTubeIcon from '@mui/icons-material/YouTube'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { DetailCard } from '../../components/DetailCard'
import { Link } from 'react-router-dom'
import './styles.css'
import image1 from '../../assets/hotels/hotel_room.png'

const mock = [
	{
		image: image1,
		type: 'Classic Room - Sierra Nevada',
		toilets: '2',
		wifi: 'Co Nha',
		floor: '2 lau',
		people: '10 dua van oke',
		area: '100m2',
		price: '2 trieu',
		available: 'Co San',
		rooms: '10',
		description:
			'The dark wood panelling and elegant furnishings evoke the charm of a secluded Sierra Nevada getaway.',
		title:
			'A deeply alluring space that invites you to truly switch off from the realities of everyday life',
	},
]

const DetailAccomdation = () => {
	return (
		<div className='DetailAccomadation'>
			<section className='info_container'>
				<div className='info_name'>{mock[0].type}</div>
				<div className='info_pictiure'>
					<img src={mock[0].image} />
				</div>
				<div className='info_title'>{mock[0].title}</div>
				<div className='info_description'>{mock[0].description}</div>
				<div className='info_details_book'>
					<div className='info_details'>
						<div className='all_details'>
							<div className='detail'>Toilets :{mock[0].toilets}</div>
							<div className='detail'>Wifi :{mock[0].wifi}</div>
							<div className='detail'>Floor :{mock[0].floor}</div>
							<div className='detail'>People :{mock[0].people}</div>
							<div className='detail'>Area :{mock[0].area}</div>
							<div className='detail'>Price :{mock[0].price}</div>
							<div className='detail'>Available :{mock[0].available}</div>
						</div>
					</div>
					<div className='book_now_container'>
						<div className='book_price'>Edit this rooms or Return</div>
						<div className='book_btn'>Edit</div>
						<div className='book_btn'>All accomadations</div>
					</div>
				</div>
				<div className='Gallary_place'>
					<div className='Gallary_title'>Gallary</div>
					<div className='Gallary_picture'>
						<div className='pictures'>
							<div className='picture_container'>
								<img src={mock[0].image}></img>
							</div>
							<div className='picture_container'>
								<img src={mock[0].image}></img>
							</div>
							<div className='picture_container'>
								<img src={mock[0].image}></img>
							</div>
							<div className='picture_container'>
								<img src={mock[0].image}></img>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default DetailAccomdation
