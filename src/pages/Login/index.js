import react from 'react'

import './styles.css'
import admin_img from './pic/admin.png'
import admin_pattern from './pic/admin_pattern.png'

const login = () => {
	return (
		<div>
			<section id='login_container'>
				<section id='login_section'>
					<section id='login_section_title'></section>
					<section id='login_form'>
						<form>
							<h1>
								Hi !
								<br /> Welcome back again, my Admin <br />
							</h1>
							<h3>Please enter your code to log in</h3>
							<input type='text' name='txtTen' />
							<br />
							<input type='submit' value='Submit' />
						</form>
					</section>
				</section>
				<section id='login_banner'>
					<div className='banner_container'>
						<img src={admin_pattern} id='pattern_banner_container'></img>
					</div>
					<div className='banner_container'>
						<img src={admin_img} id='img_banner_container'></img>
					</div>
				</section>
			</section>
		</div>
	)
}

export default login
