import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import AppContainer from './containers/AppContainer';
import store from './store'
import './index.css'

ReactDOM.render(
  (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  ),
  document.getElementById('root')
)
