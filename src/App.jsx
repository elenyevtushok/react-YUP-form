import { useState } from 'react'
import './App.css'
import { FeatureB } from './components/FeatureB';
import { Form } from './components/Form'

function App() {
	return(
		<div className='App'>
			<Form />
			<FeatureB />
		</div>
	)
}

export default App
