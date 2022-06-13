// bookshelf-app/src/index.tsx

// Import deps
import React from 'react'
import { render } from 'react-dom'

// Import components
import { Employee } from './components/employees'

// Import styles
//import './styles/styles.css'

// Find div container
const rootElement = document.getElementById('root')

// Render Bookshelf component in the DOM
render(<Employee />, rootElement)