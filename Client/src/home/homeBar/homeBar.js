import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import {Card} from 'material-ui/Card';
import Drawer from 'material-ui/Drawer';
import DashBoard from 'material-ui/svg-icons/action/dashboard';
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import Personpin from 'material-ui/svg-icons/maps/person-pin';
import Settings from 'material-ui/svg-icons/action/settings';
import Colorlens from 'material-ui/svg-icons/image/color-lens';
import Book from 'material-ui/svg-icons/action/book';
import Person from 'material-ui/svg-icons/social/person';
import { Link } from 'react-router-dom'
import FlatButton from 'material-ui/FlatButton';
import {sideBarStyle} from '../../css/materialStyle'



export default class homeBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};

    this.handleToggle = this.handleToggle.bind(this);
  }
  
  handleToggle(){ this.setState({open: !this.state.open})}

  render() {
    var barBackgroundColor = this.props.homeStyle.barBackgroundColor
    var barEmphasize = this.props.homeStyle.barEmphasize
    var barTextColor = this.props.homeStyle.barTextColor
    var pageName = this.props.homeStyle.pageName

    return (
      <Toolbar className="d-flex row" style={{ backgroundColor: barBackgroundColor}}>
        <ToolbarGroup firstChild  style={{backgroundColor: barEmphasize}}>
        
        <FlatButton 
          onClick={this.handleToggle}
          label="DashBoard"
          labelPosition="after"
          secondary
          style={{
            color: barTextColor,
        }}
          icon={<DashBoard />}
        />

        <Drawer open={this.state.open}  containerStyle={sideBarStyle}>
          <Card>
          <MenuItem style={{color:barEmphasize}} containerElement={<Link to={{pathname: '/home/profile'}} />} primaryText="Kevin" leftIcon={<Person color={barEmphasize} />} />
          </Card>
          <MenuItem style={{color:barBackgroundColor}} containerElement={<Link to={{pathname: '/home/configuration'}} />} primaryText="Configuration" leftIcon={<Settings color={barBackgroundColor} />} />
          <MenuItem style={{color:barBackgroundColor}} containerElement={<Link to={{pathname: '/home/themes'}} />} primaryText="Themes" leftIcon={<Colorlens color={barBackgroundColor} />} />
          <MenuItem style={{color:barBackgroundColor}} containerElement={<Link to={{pathname: '/home/posts'}} />} primaryText="Posts" leftIcon={<Book color={barBackgroundColor} />} />
          <MenuItem style={{color:barBackgroundColor}} containerElement={<Link to={{pathname: '/home/live'}} />} primaryText="Live" leftIcon={<RemoveRedEye color={barBackgroundColor} />} />
          <MenuItem style={{color:barBackgroundColor}} containerElement={<Link to={{pathname: '/'}} />} primaryText="Logout" leftIcon={<Personpin color={barBackgroundColor} />} />
        </Drawer>
          
        </ToolbarGroup>
        <ToolbarGroup><ToolbarTitle text={pageName} style={{color:barTextColor}} /></ToolbarGroup>

      </Toolbar>
    );
  }
}