import React from 'react'
import { useDeleteAccomadation } from '../../queries/useAccomadation.queries'
import './styles.css'

export const AccomadationCard = (props) => {
	const onDeleteAccomadation = useDeleteAccomadation(props.id)
	return (
		<div className='card__container'>
			<img src={props.img} className='accom__image' alt='Preview Accomadation' />
			<div className='card__info'>
				<div className='card__head'>
					<span className='posted'>Posted by: Admin</span>
					<span className='posted'>Fed 02 2016</span>
				</div>
				<span className='name'>{props.name}</span>
				<span className='description'>{props.description}</span>
				<div className='btn__group'>
					<div className='btn'>Detail</div>
					<div className='btn'>Update</div>
					<div
						onClick={() => {
							onDeleteAccomadation()
							window.location.reload()
						}}
						className='btn'
					>
						Delete
					</div>
				</div>
			</div>
		</div>
	)
}
