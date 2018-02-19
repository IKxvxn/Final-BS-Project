import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

import * as exampleActions from './exampleActions'


class DepartmentContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    {/*Function that has to be called before render*/}
    this.props.ExampleFunction()
  }

  render() {
    return (
      <h1>Ready!</h1>
    );
  }

}

{/*Which are the types contained in the proptypes*/}
DepartmentContainer.propTypes = {
  ExampleFunction: PropTypes.func
}

{/*Which are the default values if the proptype is empty*/}
DepartmentContainer.defaultProps = {
  ExampleFunction: () => {}
}

{/*Save the redux state into the container*/}
function mapStateToProps(state) {
  return {
    ExapleofData: state.nameofReducer.exampleReducer
  }
}

{/*Save the redux dispatchers into the container state*/}
function mapDispatchToProps(dispatch) {
  return {
    ExampleFunction: ()  => dispatch(exampleActions.ExampleFunction())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DepartmentContainer)