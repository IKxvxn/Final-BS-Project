import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import ContentLink from 'material-ui/svg-icons/content/link';
import Divider from 'material-ui/Divider';
import ContentCopy from 'material-ui/svg-icons/content/content-copy';
import Download from 'material-ui/svg-icons/file/file-download';
import Delete from 'material-ui/svg-icons/action/delete';
import FontIcon from 'material-ui/FontIcon';

export default class DrawerSimpleExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle(){ this.setState({open: !this.state.open})};

  render() {
    return (
      <div>
        <RaisedButton
          label="Toggle Drawer"
          onClick={this.handleToggle}
        />
        <Drawer open={this.state.open}>
            <MenuItem primaryText="Preview" leftIcon={<RemoveRedEye />} />
            <MenuItem primaryText="Share" leftIcon={<PersonAdd />} />
            <MenuItem primaryText="Get links" leftIcon={<ContentLink />} />
            <Divider />
            <MenuItem primaryText="Make a copy" leftIcon={<ContentCopy />} />
            <MenuItem primaryText="Download" leftIcon={<Download />} />
            <Divider />
            <MenuItem primaryText="Remove" leftIcon={<Delete />} />
        </Drawer>
      </div>
    );
  }
}