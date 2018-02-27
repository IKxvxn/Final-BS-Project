import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import LoginForm from './loginForm/logIn'
import {showNotification} from '../notification/notification'
import * as NT from '../notification/noticationTags'

import * as loginActions from './loginActions'
import '../css/loginStyle.css'


class loginContainer extends Component {
  constructor(props) {
    super(props);
  
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  componentDidMount(){}

  handleSignUp(){
    const values = this.props.form.values
    const history = this.props.history
    
    if(values == undefined || Object.keys(values).length<2){
      showNotification(NT.WARNING,NT.WARING_FIELD_REQUIRED)
      return
    }
    this.props.userCreate({_id:values.name,password:values.password},history)
  }

  render() {
    return (
      <div className="background">
          <div className="flex-row">
              <LoginForm handleSignUp={this.handleSignUp} />
          </div>
      </div>
    );
  }

}

{/*Which are the types contained in the proptypes*/}
loginContainer.propTypes = {
  userCreate: PropTypes.func
}

{/*Which are the default values if the proptype is empty*/}
loginContainer.defaultProps = {
  userCreate: () => {}
}

{/*Save the redux state into the container*/}
function mapStateToProps(state) {
  return {
    login: state.login.login,
    form: state.form.SignInUp

  }
}

{/*Save the redux dispatchers into the container state*/}
function mapDispatchToProps(dispatch) {
  return {
    userCreate: (user,history)  => dispatch(loginActions.userCreate(user,history))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(loginContainer)