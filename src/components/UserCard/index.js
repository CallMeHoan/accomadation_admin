import React from 'react'
import './styles.css'
import User from '../../assets/user.png'

export const UserCard = (props) => {
	return (
		<div className='card__container'>
			<img src={User} className='accom__image' alt='Preview Accomadation' />
			<div className='card__info'>
				<div className='card__head'>
					<span className='posted'>{props.gender}</span>
					<span className='posted'>{props.birthday}</span>
				</div>
				<span className='name'>{props.name}</span>
				<span className='description'>{props.phone}</span>
				<span className='description'>{props.email}</span>
			</div>
		</div>
	)
}
