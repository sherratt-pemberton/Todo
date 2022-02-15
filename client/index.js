import React from 'react'
import { render } from 'react-dom'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import reducers from './reducers'
import App from './components/App'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))
const appElement = document.getElementById('app')

document.addEventListener('DOMContentLoaded', () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path = "*" element = {<App />} >
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>,
    appElement)
})
