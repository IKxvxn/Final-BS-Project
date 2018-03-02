'use strict'

import React from 'react'
import { SketchPicker } from 'react-color'
import {pickerCover, pickerPopover, pickerSwatch, pickerColor} from '../../css/materialStyle'


class colorPicker extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      displayColorPicker: false
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleClick(){
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  }

  handleClose(){
    this.setState({ displayColorPicker: false })
    this.props.saveProps()
  }

  handleChange(color){
    this.setState({ color: {hex:color.hex}})
    this.props.handleColorChange(color.hex)

  }

  render() {
    return (
      <div>
        <div style={pickerSwatch} onClick={ this.handleClick }>
          <div style={pickerColor(this.props.color)} />
        </div>
        { this.state.displayColorPicker ? 
          <div style={pickerPopover}>
            <div style={pickerCover} onClick={ this.handleClose }/>
            <SketchPicker color={ this.props.color } onChange={ this.handleChange } />
          </div> : null 
        }
      </div>
    )
  }
}

export default colorPicker