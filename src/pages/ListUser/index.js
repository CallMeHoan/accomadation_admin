import React from 'react'
import './styles.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import YouTubeIcon from '@mui/icons-material/YouTube'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { UserCard } from '../../components/UserCard'
import { Link } from 'react-router-dom'
import Hotel1 from '../../assets/hotels/hotel_room.png'
import Hotel2 from '../../assets/hotels/hotel_room_2.png'
import Hotel3 from '../../assets/hotels/hotel_room_3.png'
const mock = [
	{
		id: 1,
		name: 'Nguyen Thien Hoan',
		birthday: '17/09/2001',
		gender: 'male',
		phone: '0794676336',
		email: 'nguyenthienhoan@gmail.com',
	},
	{
		id: 2,
		name: 'Nguyen Tan Dat',
		birthday: '17/09/2001',
		gender: 'male',
		phone: '0794676336',
		email: 'nguyenthienhoan@gmail.com',
	},
	{
		id: 3,
		name: 'Ho Dang Tien',
		birthday: '17/09/2001',
		gender: 'male',
		phone: '0794676336',
		email: 'nguyenthienhoan@gmail.com',
	},
]
const ListUser = () => {
	return (
		<div className='ListAccomadation'>
			<Tabs className='tab__container'>
				<div className='tabs'>
					<span className='brand'>MoviLa</span>
					<TabList className='tab__list'>
						<Tab className='tab'>
							<Link className='link' to='/'>
								Homepage
							</Link>
						</Tab>
						<Tab className='tab'>All Users</Tab>
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
						{mock.map((item) => (
							<UserCard
								name={item.name}
								phone={item.phone}
								birthday={item.birthday}
								gender={item.gender}
								email={item.email}
							/>
						))}
					</TabPanel>
				</div>
			</Tabs>
		</div>
	)
}
export default ListUser
