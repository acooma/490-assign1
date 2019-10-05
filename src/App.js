import React, { Component } from "react";
import ReactDOM from "react-dom";

import shuffle from "shuffle-array";

import "./App.css";
import { thisExpression } from "@babel/types";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows1: "",
      rows2: "",
      columns1: "",
      columns2: "",
      matching: "",
      dataSet: [
        "Jake",
        "John",
        "Catherine",
        "NIU",
        "Professor",
        "Computers",
        "Test",
        "Football",
        "Fake",
        "Tester",
        "Science",
        "Food",
        "Jake",
        "John",
        "Catherine",
        "NIU",
        "Jake",
        "John",
        "Catherine",
        "NIU",
        "Jake",
        "John",
        "Catherine",
        "NIU",
        "Jake",
        "John",
        "Catherine",
        "NIU",
        // "Random",
        // "Words",
        // "Fill",
        // "School",
        // "Homework",
        // "New York",
        // "Kansas",
        // "Texas",
        // "USA",
        // "Utah",
        // "Korea",
        // "Japan",
        // "Minnesota",
        // "Mount Everest",
        // "ASDF",
        // "LLLOLL",
        // "Pharmacy",
        // "Doctor",
        // "test",
      ]
    };
    this.handleChange = this.handleChange.bind(this);
  }

  //using cdu to check if value is being processed correctly
  componentDidUpdate(prevProps, prevState) {
    let match = this.state.matching;
    let elements = document.getElementsByName(match);

    for (let k = 0; k < elements.length; k++) {
      console.log("table2", elements[k]);
      elements[k].className = "green";
    }
  }

  handleChange(event) {
    // check it out: we get the evt.target.name (which will be either "email" or "password")
    // and use it to target the key on our `state` object with the same name, using bracket syntax
    this.setState({ [event.target.name]: event.target.value });
  }

  createTable = () => {
    let table = [];
    let rows = this.state.rows1;
    let cols = this.state.columns1;
    let setData = this.state.dataSet;
    let data = shuffle(setData);
    let match = this.state.matching;

    // Outer loop to create parent
    for (let i = 0; i < rows; i++) {
      let children = [];
      //Inner loop to create children
      for (let j = 0; j < cols; j++) {
        shuffle(data);
        children.push(
          <td className="black" id={j} name={data[j]}>
            {data[j]}
          </td>
        );
      }
      //Create the parent and add the children
      table.push(<tr id={i}>{children}</tr>);

      let elements = document.getElementsByName(match);
      console.log("MATCH", match);

      // for (let k = 0; k < elements.length; k++) {
      //   console.log(elements[k]);
      //   if (elements[k] === match) {
      //     console.log("table1", elements[k]);

      //     elements[k].className = "green";
      //   }
      // }
    }
    return table;
  };

  createTable2 = () => {
    let table = [];
    let rows = this.state.rows2;
    let cols = this.state.columns2;
    let setData = this.state.dataSet;
    let data = shuffle(setData);
    let match = this.state.matching;

    // Outer loop to create parent
    for (let i = 0; i < rows; i++) {
      let children = [];
      //Inner loop to create children
      for (let j = 0; j < cols; j++) {
        shuffle(data);
        children.push(
          <td className="black" id={j} name={data[j]}>
            {data[j]}
          </td>
        );
      }
      //Create the parent and add the children
      table.push(<tr id={i}>{children}</tr>);
    }
    return table;
  };

  render() {
    var self = this;
    return (
      <div className="App">
        <div class="container">
          <div className="main-container shadow row p-2 border-bottom">
            <form class="col-4 pl-5">
              <div class="row">
                <a class="main-label ">Table 1</a>
              </div>

              <div class="row mt-2">
                <a class="row-text">Rows:</a>
                <input
                  type=""
                  class=" ml-5"
                  id="table-1-rows"
                  placeholder="0"
                  name="rows1"
                  value={this.state.rows1}
                  onChange={this.handleChange}
                />
              </div>

              <div class="row">
                <a class="row-text">Columns:</a>
                <input
                  type=""
                  class=" ml-4 mt-1"
                  id="table-1-columns"
                  name="columns1"
                  value={this.state.columns1}
                  onChange={this.handleChange}
                  placeholder="0"
                />
              </div>
            </form>

            <form class="col-4">
              <div class="row">
                <a class="main-label">Table 2</a>
              </div>

              <div class="row mt-2">
                <a class="row-text">Rows:</a>
                <input
                  type=""
                  class=" ml-5"
                  id="table-2-rows"
                  placeholder="0"
                  name="rows2"
                  value={this.state.rows2}
                  onChange={this.handleChange}
                />
              </div>

              <div class="row">
                <a class="row-text">Columns:</a>
                <input
                  type=""
                  class=" ml-4 mt-1"
                  id="table-2-columns"
                  placeholder="0"
                  name="columns2"
                  value={this.state.columns2}
                  onChange={this.handleChange}
                />
              </div>
            </form>

            <form class="col-4 mt-5">
              <div class="row">
                <a class="row-text">Matching item</a>
                <input
                  type=""
                  class="ml-4"
                  id="matching"
                  placeholder="0"
                  name="matching"
                  value={this.state.matching}
                  onChange={this.handleChange}
                />
              </div>
            </form>
          </div>

          <div class="row">
            <table class="table-container col-6">
              <this.createTable ref={el => (this._html = el)} />
            </table>

            <table class="table-container col-6">
              <this.createTable2 />
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
