import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import YouTubeIcon from '@mui/icons-material/YouTube'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { DetailCard } from '../../components/DetailCard'
import { Link } from 'react-router-dom'
import './styles.css'

const mock = [
	{
		image: 'image',
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
			<Tabs className='tab__container'>
				<div className='tabs'>
					<span className='brand'>MoviLa</span>
					<TabList className='tab__list'>
						<Tab className='tab'>
							<Link className='link' to='/'>
								Homepage
							</Link>
						</Tab>
						<Tab className='tab'>All Accomadations</Tab>
						<Tab className='tab'>
							<Link className='link' to='/new-accomadation'>
								New Accomadation
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
					<TabPanel>Welcom back</TabPanel>
					<TabPanel>
						<DetailCard
							image={mock.image}
							type={mock.type}
							toilets={mock.toilets}
							wifi={mock.wifi}
							floor={mock.floor}
							people={mock.people}
							area={mock.area}
							price={mock.price}
							available={mock.available}
							rooms={mock.rooms}
							address={mock.address}
							description={mock.description}
						/>
					</TabPanel>
					<TabPanel></TabPanel>
				</div>
			</Tabs>
		</div>
	)
}

export default DetailAccomdation
