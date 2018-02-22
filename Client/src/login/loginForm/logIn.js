import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {TextField} from 'redux-form-material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import {buttonStyle, basicStyle} from './formStyle'

const required = value => (value == null ? 'Required' : undefined);

class Form extends Component {
  
  render() {
    const {reset} = this.props;
    return (
      <form className="col-md-12 formContainer ">
    
        <div className=" logo" />
        <div className="row">
            <div className="col-md-12">
              <Field
                name="name"
                component={TextField}
                hintText="Name"
                floatingLabelText="Name"
                validate={required}
                ref="name"
                style={basicStyle}
              />
            </div>
        </div>
        <div className="row">
            <div className="col-md-12">
              <Field
                name="password"
                component={TextField}
                hintText="Password"                    
                floatingLabelText="Password"
                validate={required}
                type="password"
                style={basicStyle}
              />
            </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <RaisedButton label="Sign up" primary={true} style={buttonStyle} onClick={this.props.handleSignUp} />
          </div>
          <div className="col-md-6">
            <RaisedButton label="Sign in" secondary={true} style={buttonStyle} onClick={reset} />
          </div>  
        </div>
      </form>
    );
  }
}

Form = reduxForm({
  form: 'SignInUp',
})(Form);

export default Form;