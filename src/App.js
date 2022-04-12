import React from 'react'
import { ToastContainer } from 'react-toastify'
import { Suspense, lazy } from 'react'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import './styles.css'

const Homepage = lazy(() => import('./pages/Homepage'))
const Login = lazy(() => import('./pages/Login'))
const ListAccomadation = lazy(() => import('./pages/ListAccomadation'))
const Users = lazy(() => import('./pages/ListUser'))
const Detail = lazy(() => import('./pages/DetailAccomadation'))

const queryClient = new QueryClient()

function App() {
	return (
		<div className='App'>
			<QueryClientProvider client={queryClient}>
				<Router>
					<Suspense fallback={<h1>Loading...</h1>}>
						<Switch>
							<Route component={Homepage} path='/' exact />
							<Route component={Login} path='/login' exact />
							<Route component={ListAccomadation} path='/all-accomadations' exact />
							<Route component={Users} path='/all-users' exact />
							<Route component={Detail} path='/detail' exact />
						</Switch>
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
			</QueryClientProvider>
		</div>
	)
}

export default App
