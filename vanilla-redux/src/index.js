import { createStore } from 'redux'
import AppRenderer from './app'
import reducer from './reducer'

// create store
const store = createStore(reducer)

// Create renderer and pass dispatcher
const appHost =  document.getElementById('app')
const renderer = new AppRenderer(store.dispatch, appHost)

// Subscribe to state changes
store.subscribe(() => {
  const state = store.getState()
  // render app with new state
  renderer.render(state)
})

// Bootstrap
renderer.render(store.getState())