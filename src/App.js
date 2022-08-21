import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Router } from 'Router'
import { Navbar } from 'components'
import './App.css'

const App = () => {
	return (
		<BrowserRouter>
		<div className='app'>
			<Navbar />
			<Router />
		</div>
		</BrowserRouter>
	)
}

export default App

