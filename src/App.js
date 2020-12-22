import React, { Component } from "react";
import "./App.css";
import "./components/Lists/Lists.css";
import Form from "./components/Form/Form";
import List from "./components/Lists/List/List";

import axios from "axios";
class App extends Component {
  state = {
    list: [],
  };

  componentDidMount() {
    axios.get("http://localhost:8000/").then((res) => {
      this.setState({ list: res.data });
    });
  }

  AddItem = () => {
    if (document.querySelector(".input").value === "") {
      return;
    }
    const data = {
      item: document.querySelector(".input").value,
    };
    axios.post("http://localhost:8000/", data).then((res) => {
      if (res.data.itemAdded) {
        console.log(res.data);
        this.setState({ list: res.data.data });
      }
    });
    document.querySelector(".input").value = "";
  };
  deleteItem = (id) => {
    const data = {
      id,
    };
    axios.delete("http://localhost:8000/", { data }).then((res) => {
      console.log(res.data);
      this.setState({ list: res.data.data });
    });
  };

  render() {
    const lists = this.state.list.length ? (
      this.state.list.map((list) => (
        <List
          list={list.list}
          key={list._id}
          delete={() => this.deleteItem(list._id)}
        />
      ))
    ) : (
      <p>Add Item</p>
    );
    return (
      <div className='App'>
        <h1>TodoList</h1>
        <Form addItem={this.AddItem} save={this.Save} />
        <div className='Lists'>
          <ul>{lists}</ul>
        </div>
      </div>
    );
  }
}

export default App;
