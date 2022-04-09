import React from 'react'
import './styles.css'

const Login = () => {
	return (
		<div className='login'>
			<span className='welcome'>Welcome back</span>
			<span className='brand'>Modern MovIla Studio</span>
			<input type='password' placeholder='Enter your password here' />
			<div className='btn'>Login</div>
		</div>
	)
}

export default Login
