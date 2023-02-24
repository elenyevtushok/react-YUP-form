import { useState } from 'react'
import './App.css'
import { FeatureB } from './components/FeatureB';
import { Form } from './components/Form'
import { FeatureA } from './components/FeatureA'

function App() {
	return(
		<div className='App'>
			<h1>Registration form</h1>
			<Form />
			<FeatureA />
			<FeatureB />
		</div>
	)
}

export default App
