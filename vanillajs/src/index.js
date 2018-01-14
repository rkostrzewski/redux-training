import { createStore } from 'redux'
import AppView from './AppView'
import reducer from './reducer';
import './main.css'

// create store
const store = createStore(reducer)

// Create renderer and pass dispatcher
const appHost =  document.getElementById('root')
const renderer = new AppView(store.dispatch, appHost)

// Subscribe to state changes
store.subscribe(() => {
  const state = store.getState()
  // render app with new state
  renderer.render(state)
})

// Bootstrap
renderer.render(store.getState())

// This is needed for Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
