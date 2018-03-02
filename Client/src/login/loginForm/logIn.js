import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {TextField} from 'redux-form-material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import {buttonStyle, basicStyle} from '../../css/materialStyle'

/*Restrictions*/
const required = value => (value == null ? 'Required' : undefined);
const maxLength = max => value => value && value.length > max ? `Must be ${max} characters or less` : undefined
const maxLength10 = maxLength(10)

class Form extends Component {
  
  render() {
    return (
      <form className="col-md-6 formContainer ">
    
        <div className=" logo" />
        <div className="flex-row">
            <div className="col-md-12">
              <Field
                name="name"
                component={TextField}
                hintText="Name"
                floatingLabelText="Name"
                validate={required,maxLength10}
                ref="name"
                style={basicStyle}
                
              />
            </div>
        </div>
        <div className="flex-row">
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

        <div className="flex-row">
          <div className="col-md-12">
            <RaisedButton label="Sign up" primary={true} style={buttonStyle} onClick={this.props.handleSignUp} />
          </div>
          <div className="col-md-12">
            <RaisedButton label="Sign in" secondary={true} style={buttonStyle}  />
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