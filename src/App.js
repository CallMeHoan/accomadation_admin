import React from 'react'
import { ToastContainer } from 'react-toastify'
import { Suspense, lazy } from 'react'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import './styles.css'

function App() {
	return (
		<div className='App'>
			<Router>
				<Suspense fallback={<h1>Loading...</h1>}>
					{/* <Switch>
					<Route component={Homepage} path='/' exact />
					<Route component={Roompage} path='/rooms' exact />
				</Switch> */}
					Hello World
					<ToastContainer
						position='top-right'
						autoClose={5000}
						hideProgressBar={false}
						newestOnTop={false}
						closeOnClick
						rtl={false}
						pauseOnFocusLoss
						draggable
						pauseOnHover
					/>
					<ToastContainer />
				</Suspense>
			</Router>
		</div>
	)
}

export default App
