import React, { Component } from "react";
import "./Form.css";
class Form extends Component {
  render() {
    return (
      <div className='Form'>
        <input type='text' placeholder='ADD' className='input' />
        <button onClick={this.props.addItem} id='btn' type='submit'>
          ADD
        </button>
      </div>
    );
  }
}

export default Form;
