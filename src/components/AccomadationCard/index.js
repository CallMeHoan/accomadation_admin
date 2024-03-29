import React from 'react'
import { useDeleteAccomadation } from '../../queries/useAccomadation.queries'
import { Link } from 'react-router-dom'
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
					<div className='btn'>
						<Link className='link' to={`/accomadation/${props.id}`}>
							Details
						</Link>
					</div>
					<div className='btn'>
						<Link className='link' to={`/edit/${props.id}`}>
							Update
						</Link>
					</div>
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
