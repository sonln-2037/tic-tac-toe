import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <a href="#" 
        className={"button " + (this.props.value === true ? "blue" : "red")}
        onClick={this.props.click}
      >
        {this.props.value === true && 'o'}
        {this.props.value === false && 'x'}
      </a>
    );
  }
}

export default Button;