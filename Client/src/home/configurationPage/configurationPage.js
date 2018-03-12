import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import FlatButton  from 'material-ui/FlatButton';
import {Tabs, Tab} from 'material-ui/Tabs';
import {Card, CardActions, CardHeader,CardText} from 'material-ui/Card';
import Update from 'material-ui/svg-icons/action/update';


class configurationPage extends React.Component {
    
      constructor(props) {
        super(props);
        this.state = {
            brandName:this.props.homeStyle.pageName
          };
          this.handleBrandChange=this.handleBrandChange.bind(this)
          
      }
      handleBrandChange(event){
        this.setState({
            brandName: event.target.value,
        });
      }

      render() {
        return (
        <div className="paperPadd row">
            <Paper className="col-md-12"  zDepth={2}>
                <CardHeader 
                    titleStyle={{fontSize:"1.3rem"}}
                    title="Brand Name"
                    subtitle={<TextField value={this.state.brandName} onChange={this.handleBrandChange} style={{fontSize: '1rem', margin:".5rem 0"}}   />}
                />
                <CardActions>
                    <FlatButton label="Change" onClick={() => {this.props.handlers.handleBrandChange(this.state.brandName)}} icon={<Update />} />
                </CardActions>
            </Paper>
        </div>

        );
      }
    }

export default configurationPage;