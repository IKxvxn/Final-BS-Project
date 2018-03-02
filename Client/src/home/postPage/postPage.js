import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import FlatButton  from 'material-ui/FlatButton';
import {Tabs, Tab} from 'material-ui/Tabs';
import {CardActions} from 'material-ui/Card';
import Cancel from 'material-ui/svg-icons/navigation/arrow-back';
import Clear from 'material-ui/svg-icons/content/delete-sweep';
import Update from 'material-ui/svg-icons/action/update';
import Create from 'material-ui/svg-icons/action/description';
import Editor from './editor';
import Posts from './posts';

import {tabStyle, buttonStyle} from '../../css/materialStyle'


class postPage extends React.Component {
    
      constructor(props) {
        super(props);
        this.state = {
          value: '1',
          postID:"",
          postTitle:"",
          postContent:""
        };
        this.handleTabbChange = this.handleTabbChange.bind(this);
        this.handleMode = this.handleMode.bind(this);
        this.handlepostTitleChange = this.handlepostTitleChange.bind(this);
        this.handleContentChange = this.handleContentChange.bind(this);
        this.handlePostCreate = this.handlePostCreate.bind(this);
        this.handlePostUpdate = this.handlePostUpdate.bind(this);
        this.clear = this.clear.bind(this);
        this.editMode = this.editMode.bind(this);

      }
    
      handleTabbChange(value){
        this.setState({
          value: value,
        });
      }

      handlepostTitleChange(event){
        this.setState({
          postTitle: event.target.value,
        });
      }

      handleContentChange (content) {
        this.setState({
          postContent: content
        });
      }

      handlePostCreate(){
        this.props.handlers.createPost(this.state.postTitle,this.state.postContent,(id)=>{this.setState({postID:id})})
      }

      handlePostUpdate(){
        this.props.handlers.updatePost(this.state.postTitle,this.state.postContent,this.state.postID)
      }

      handleMode(){
        if(this.state.postID!=""){
          return(<CardActions>
                   <FlatButton  rippleColor={this.props.homeStyle.barEmphasize} label="Update" onClick={this.handlePostUpdate} icon={<Update />} />
                   <FlatButton rippleColor={this.props.homeStyle.barEmphasize}  onClick={()=>this.clear("2")} label="Clear" icon={<Clear />}  />
                   <FlatButton rippleColor={this.props.homeStyle.barEmphasize} label="Create" onClick={this.handlePostCreate} icon={<Create />}    />
                 </CardActions>) 
        }
          return(<CardActions>
                   <FlatButton rippleColor={this.props.homeStyle.barEmphasize}  onClick={()=>this.clear("2")} label="Clear" icon={<Clear />}  />
                   <FlatButton rippleColor={this.props.homeStyle.barEmphasize} label="Create" onClick={this.handlePostCreate} icon={<Create />}    />
                 </CardActions>) 
          
      }

      clear(tabbNumer){
        this.setState({
          postID:"",
          postTitle:"",
          postContent:"",
          value:tabbNumer
        })
      }

      editMode(title,content,_id){
        this.setState({
          postID:_id,
          postTitle:title,
          postContent:content,
          value:'2'
        })
      }

    
      render() {
        return (

        <div className="paperPadd row">
            <Paper className="col-md-12"  zDepth={2}>
                <Tabs
                  style={tabStyle}
                  tabItemContainerStyle={{backgroundColor:this.props.homeStyle.barBackgroundColor}}
                  inkBarStyle={{background: this.props.homeStyle.barEmphasize}}
                  value={this.state.value}
                  onChange={this.handleTabbChange}
                >
                    <Tab className="col-sm-6" label={<span style={{ color:this.props.homeStyle.barTextColor}}>Posts</span>} value="1" >
                      <Posts posts={this.props.posts} handleChangeState={this.editMode} />
                    </Tab>
                    <Tab className="col-sm-6" label={<span style={{ color:this.props.homeStyle.barTextColor}}>Editor</span>} value="2">
                        <TextField
                          value={this.state.postTitle}
                          onChange={this.handlepostTitleChange}
                          style={{fontSize: '1.5rem', margin:".5rem 0"}}
                          hintText="Post Title"
                          fullWidth
                        />
                        <Editor handleContentChange={this.handleContentChange} post={{postID:this.state.postID,postTitle:this.state.postTitle,postContent:this.state.postContent}} />
                        {this.handleMode()}
                    </Tab>
                </Tabs>
            </Paper>
        </div>

        );
      }
    }

export default postPage;