import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import YouTubeIcon from '@mui/icons-material/YouTube'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { Link } from 'react-router-dom'
import './styles.css'
import Accom1 from '../../assets/Home/accom1.jpg'

const Homepage = () => {
	return (
		<div className='homepage'>
			<Tabs className='tab__container'>
				<div className='tabs'>
					<span className='brand'>MoviLa</span>
					<TabList className='tab__list'>
						<Tab className='tab'>Homepage</Tab>
						<Tab className='tab'>Accomadations</Tab>
						<Tab className='tab'>
							<Link className='link' to='/all-users'>
								Users
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
						<div className='list__container'>
							<span className='item'>Welcome back Admin!</span>
						</div>
					</TabPanel>
					<TabPanel>
						<div className='list__container'>
							<Link className='link' to='/all-accomadations'>
								<span className='item'>All Accomadations</span>
							</Link>
							<Link className='link' to='/new'>
								<span className='item'>Add Accomadations</span>
							</Link>
						</div>
					</TabPanel>
				</div>
			</Tabs>
			<div className='images'>
				<img className='image' src={Accom1} alt='Accomadation' />
			</div>
		</div>
	)
}

export default Homepage
