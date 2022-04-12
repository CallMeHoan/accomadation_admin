import React from 'react'
import './styles.css'

export const DetailCard = (props) => {
	return (
		<div className='AccomadationDetail'>
			<img src={props.image} alt='Accomadation Image' />
			<div className='info'>
				<span className='text'>{props.type}</span>
				<span className='text'>{props.toilets}</span>
				<span className='text'>{props.wifi}</span>
				<span className='text'>{props.floor}</span>
				<span className='text'>{props.people}</span>
				<span className='text'>{props.area}</span>
				<span className='text'>{props.price}</span>
				<span className='text'>{props.available}</span>
				<span className='text'>{props.rooms}</span>
			</div>
			<span className='text'>{props.address}</span>
			<span className='text'>{props.description}</span>
		</div>
	)
}
