import React, { Component } from "react";
import "./Lists.css";
import List from "./List/List";
 
class Lists extends Component {
  render() {
    const lists = this.props.state.length ? (
      this.props.state.map((list) => (
        <List list={list.item} key={list.key} delete={this.props.delete} />
      ))
    ) : (
      <p>Add Item</p>
    );
    return (
      <div className='Lists'>
        <ul>{lists}</ul>
      </div>
    );
  }
}

export default Lists;
