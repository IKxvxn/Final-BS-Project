import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './App'
import Store from './Store'



ReactDOM.render(
    <Provider store={Store}>
        <BrowserRouter>
          <MuiThemeProvider>
            <App />
          </MuiThemeProvider>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));