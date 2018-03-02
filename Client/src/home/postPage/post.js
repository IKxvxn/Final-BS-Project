import React from 'react';
import {Card, CardActions, CardHeader,CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import FroalaEditorView from 'react-froala-wysiwyg/FroalaEditorView';
import Edit from 'material-ui/svg-icons/editor/mode-edit';
import Delete from 'material-ui/svg-icons/action/delete';

var dateFormat = require('dateformat');

export default class CardExampleControlled extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
    this.handleExpandChange = this.handleExpandChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleExpand = this.handleExpand.bind(this);
    this.handleReduce = this.handleReduce.bind(this);
  }

  handleExpandChange(expanded){
    this.setState({expanded: expanded});
  }

  handleToggle(event, toggle){
    this.setState({expanded: toggle});
  }

  handleExpand(){
    this.setState({expanded: true});
  }

  handleReduce(){
    this.setState({expanded: false});
  }

  render() {
    const created = new Date(this.props.post.created);
    const updated = new Date(this.props.post.updated);
    
    return (
      <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
        <CardHeader 
          titleStyle={{fontSize:"1.3rem"}}
          title={this.props.post.title}
          subtitle={"Created by " + (this.props.post.autor) + " on " + (dateFormat(created, "dddd, mmmm dS, yyyy")) + " at " + (dateFormat(created, "h:MM:ss TT")) + ( updated.getTime()===created.getTime() ? "." : (". Last update on " + (dateFormat(updated, "dddd, mmmm dS, yyyy")) + " at " + (dateFormat(updated, "h:MM:ss TT"))))}
          actAsExpander
          showExpandableButton
        />
        <CardText expandable>
          <FroalaEditorView model={this.props.post.content} />
        </CardText>
        <CardActions>
          <FlatButton label="Edit" onClick={() => {this.props.handleChangeState(this.props.post.title,this.props.post.content,this.props.post._id)}} icon={<Edit />} />
          <FlatButton label="Delete" icon={<Delete />} />
        </CardActions>
      </Card>
    );
  }
}