import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import {showNotification} from '../notification/notification'
import * as NT from '../notification/noticationTags'
import * as homeActions from './homeActions'
import '../css/homeStyle.css'

import TopBar from './homeBar/homeBar'
import ThemePage from './themePage/themePage'


class homeContainer extends Component {
  constructor(props) {
    super(props);
  
    this.themeRender = this.themeRender.bind(this);
    this.saveProps = this.saveProps.bind(this);
  }

  componentDidMount(){
    this.props.getProps()
  }

  saveProps(){
    this.props.saveProps(this.props.homeStyle)
  }

  themeRender(props){
    return (
      <ThemePage 
        homeStyle={this.props.homeStyle} 
        handlers={{handlechangeBBGC:this.props.changeBBGC,
                   handlechangeBESC:this.props.changeBESC,
                   handlechangeBTXC:this.props.changeBTXC,
                   saveProps: this.saveProps}}
        props={props}
      />
    );
  }

  render() {
    return (
      <div className="container-fluid homeBG">
          <TopBar homeStyle={this.props.homeStyle} />
          <Route path='/home/themes' render={this.themeRender}  />

      </div>
    );
  }

}

{/*Which are the types contained in the proptypes*/}
homeContainer.propTypes = {
  userCreate: PropTypes.func
}

{/*Which are the default values if the proptype is empty*/}
homeContainer.defaultProps = {
  userCreate: () => {}
}

{/*Save the redux state into the container*/}
function mapStateToProps(state) {
  return {
    homeStyle: state.home.homeStyle,

  }
}

{/*Save the redux dispatchers into the container state*/}
function mapDispatchToProps(dispatch) {
  return {
    changeBBGC: (color) => dispatch(homeActions.changeBar_BGC(color)),
    changeBESC: (color) => dispatch(homeActions.changeBar_ESC(color)),
    changeBTXC: (color) => dispatch(homeActions.changeBar_TXC(color)),
    saveProps: (Props) => dispatch(homeActions.saveProps(Props)),
    getProps: () => dispatch(homeActions.getProps())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(homeContainer)