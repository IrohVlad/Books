import './normalize.css'
import './style.scss'
import React from 'react'
import {render} from 'react-dom'
import App from './components/App'
import {store} from './redux/index'
import { Provider } from 'react-redux'


render(<Provider store={store}><App/></Provider>, document.querySelector('.wrapper'))