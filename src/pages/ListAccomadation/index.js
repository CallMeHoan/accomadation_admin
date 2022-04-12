import React from 'react'
import './styles.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import YouTubeIcon from '@mui/icons-material/YouTube'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { AccomadationCard } from '../../components/AccomadationCard'
import { Link } from 'react-router-dom'
import { useGetAccomadation } from '../../queries/useAccomadation.queries'
import Hotel1 from '../../assets/hotels/hotel_room.png'
import Hotel2 from '../../assets/hotels/hotel_room_2.png'
import Hotel3 from '../../assets/hotels/hotel_room_3.png'

const mock = [
	{
		id: 1,
		type: 'Classic Room',
		image: Hotel1,
		property: '25m / No specific view / 2 Adults',
		description:
			'The dark wood panelling and elegant furnishings evoke the charm of a secluded Sierra Nevada getaway.',
	},
	{
		id: 2,
		type: 'Superior Room',
		image: Hotel2,
		property: '25m / Partial Mountain View / 2 Adults, 1 Children ',
		description:
			'The superior double rooms offer a cosy, rustic atmosphere, and are the ultimate setting to escape from the stresses of daily life.',
	},
	{
		id: 3,
		type: 'Deluxe Room',
		image: Hotel3,
		property: '28 - 36m/ Mountain View/ 2 Adults ',
		description:
			'Each impressive deluxe room is inspired by a different mountain region of the world, from the Swiss Alps to Mount Kilimanjaro.',
	},
]

const ListAccomadation = () => {
	const { data } = useGetAccomadation()
	console.log(data)
	return (
		<div className='ListAccomadation'>
			<Tabs className='tab__container'>
				<div className='tabs'>
					<span className='brand'>MoviLa</span>
					<TabList className='tab__list'>
						<Tab className='tab'>All Accomadations</Tab>
						<Tab className='tab'>
							<Link className='link' to='/new-accomadation'></Link>
						</Tab>
						<Tab className='tab'>
							<Link className='link' to='/'>
								Homepage
							</Link>
						</Tab>
					</TabList>
					<div className='social'>
						<div className='icon'>
							<FacebookIcon />
						</div>
						<div className='icon'>
							<InstagramIcon />
						</div>
						<div className='icon'>
							<YouTubeIcon />
						</div>
						<div className='icon'>
							<LinkedInIcon />
						</div>
					</div>
				</div>

				<div className='content'>
					<TabPanel>
						{data?.map((item) => (
							<AccomadationCard
								key={item.id}
								id={item.id}
								img={item.image}
								name={item.type}
								description={item.description}
							/>
						))}
					</TabPanel>
					<TabPanel></TabPanel>
					<TabPanel>Welcom back</TabPanel>
				</div>
			</Tabs>
		</div>
	)
}
export default ListAccomadation
