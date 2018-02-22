import React from 'react'
import {NotificationContainer} from 'react-notifications';
import {Route} from 'react-router-dom'

import 'react-notifications/lib/notifications.css';
import 'font-awesome/css/font-awesome.css'
import './css/generalStyle.css'
import './css/bootstrap.css'

import Login from './login/loginContainer'
import Home from './home/homeContainer'

const App = () => {
    return (
      <div>
        <Route exact path='/'  component={Home} />
        <Route exact path='/home'  component={Home} />
        <NotificationContainer />
      </div>
    );
}


export default App