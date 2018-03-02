import React from 'react';
import Paper from 'material-ui/Paper';
import {Card, CardHeader} from 'material-ui/Card';
import ColorPicker from './colorPicker';

const themePage = (props) => {
    return (   
        <div className="paperPadd row">
            <Paper className="col-md-12"  zDepth={2}>
                <Card className="row">
                    <CardHeader
                        title="Principal Color"
                        subtitle={props.homeStyle.barBackgroundColor}
                        avatar={<ColorPicker color={props.homeStyle.barBackgroundColor} handleColorChange={props.handlers.handlechangeBBGC} saveProps={props.handlers.saveProps} />}
                    />
                </Card>
                <Card  className="row">
                    <CardHeader
                        title="Accent Color"
                        subtitle={props.homeStyle.barEmphasize}
                        avatar={<ColorPicker color={props.homeStyle.barEmphasize} handleColorChange={props.handlers.handlechangeBESC} saveProps={props.handlers.saveProps} />}
                    />
                </Card>
                <Card  className="row">
                    <CardHeader
                        title="Accent Text Color"
                        subtitle={props.homeStyle.barTextColor}
                        avatar={<ColorPicker color={props.homeStyle.barTextColor} handleColorChange={props.handlers.handlechangeBTXC} saveProps={props.handlers.saveProps} />}
                    />
                </Card>
            </Paper>
        </div>
      );
    }

export default themePage;