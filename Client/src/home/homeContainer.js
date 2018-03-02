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
import PostPage from './postPage/postPage'

class homeContainer extends Component {
  constructor(props) {
    super(props);
  
    this.themeRender = this.themeRender.bind(this);
    this.postRender = this.postRender.bind(this);
    this.createPost = this.createPost.bind(this);
    this.updatePost = this.updatePost.bind(this);
    this.saveProps = this.saveProps.bind(this);
  }

  componentDidMount(){
    this.props.getProps()
  }

  saveProps(){
    this.props.saveProps(this.props.homeStyle)
  }

  createPost(title,content,response){
    if(title==""|content==""){showNotification(NT.WARNING,NT.WARING_FIELD_REQUIRED); return}
    this.props.createPost(title,content,this.props.userInfo._id,response)
  }

  updatePost(title,content,_id){
    if(title==""|content==""){showNotification(NT.WARNING,NT.WARING_FIELD_REQUIRED); return}
    this.props.updatePost(title,content,_id)
  }

  themeRender(){
    return (
      <ThemePage 
        homeStyle={this.props.homeStyle} 
        handlers={{handlechangeBBGC:this.props.changeBBGC,
                   handlechangeBESC:this.props.changeBESC,
                   handlechangeBTXC:this.props.changeBTXC,
                   saveProps: this.saveProps}}
      />
    );
  }

  postRender(){
    return (
      <PostPage 
        homeStyle={this.props.homeStyle} 
        posts={this.props.posts} 
        handlers={{createPost:this.createPost,
                   updatePost:this.updatePost}}
      />
    );
  }

  render() {
    return (
      <div className="container-fluid homeBG">
          <TopBar homeStyle={this.props.homeStyle} user={this.props.userInfo._id} />
          <Route path='/home/themes' render={this.themeRender}  />
          <Route path='/home/posts' render={this.postRender}  />

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
    userInfo: state.login.login,
    posts: state.home.posts

  }
}

{/*Save the redux dispatchers into the container state*/}
function mapDispatchToProps(dispatch) {
  return {
    changeBBGC: (color) => dispatch(homeActions.changeBar_BGC(color)),
    changeBESC: (color) => dispatch(homeActions.changeBar_ESC(color)),
    changeBTXC: (color) => dispatch(homeActions.changeBar_TXC(color)),
    saveProps: (Props) => dispatch(homeActions.saveProps(Props)),
    getProps: () => dispatch(homeActions.getProps()),
    createPost: (title,content,autor,response) => dispatch(homeActions.createPost({title:title,content:content,autor:autor},response)),
    updatePost: (title,content,_id) => dispatch(homeActions.updatePost({title:title,content:content,_id:_id}))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(homeContainer)