import { useState } from 'react'
import './App.css'
import { Form } from './components/Form'
import { FeatureA } from './components/FeatureA'

function App() {
	return(
		<div className='App'>
			<Form />
			<FeatureA/>
		</div>
	)
}

export default App
