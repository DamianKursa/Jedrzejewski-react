import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/lab/Slider';
import './SimpleSlider.scss'

const styles = {
  root: {
    maxWidth: '300',
    maxHeight :'auto',
    padding : "2rem"
  },
  slider: {
    padding: '22px 0px',
  },
  track:{
      backgroundColor :"#E26A6A"
  },
  focused:{
    boxShadow : "none"
  },
  thumb:{
    backgroundColor :"#E26A6A",
    width:'19px',
    height:'19px'
  
  },
  activated:{
    boxShadow : "none !important"
  }
};

class SimpleSlider extends React.Component {
  state = {
    value: this.props.min
  };

  handleChange = (event,value) => {
  
    this.setState({ 
      value
    });
  };

  render() {
    const { classes } = this.props;

    return (
        <React.Fragment>
            <span className="label">
                <p>{this.props.name}</p>
                <p>{Math.floor(this.state.value)}</p>
            </span>
            <div className='simple-sliders-containers'>
            <Slider
                min={this.props.min}
                max={this.props.max}
                classes={{
                    root: classes.root,
                    track: classes.track,
                    thumb : classes.thumb,
                    thumbWrapper : classes.thumbWrapper , 
                    focused : classes.focused,
                    activated: classes.activated        
                }}
                value={this.state.value}
                aria-labelledby="label"
                onChange={this.handleChange}
            />
            </div>
        </React.Fragment>

    );
  }
}

SimpleSlider.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleSlider);