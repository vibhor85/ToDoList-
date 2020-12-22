import React, { Component } from "react";
import "./List.css";
class List extends Component {
  render() {
    return (
      <li className='List'>
        <h4>{this.props.list}</h4>
        <button onClick={this.props.delete}>Delete</button>
      </li>
    );
  }
}

export default List;
