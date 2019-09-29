import React, { Component } from "react";
import "./Controller.css";

class Controller extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="main-container shadow row p-2">
        <div class="col-6 pl-5">
          <div class="row">
            <a class="main-label ">Table 1</a>
          </div>

          <div class="row mt-2">
            <a class="row-text">How many rows?</a>
            <input
              type=""
              class="form-control ml-5"
              id="input-1"
              placeholder="0"
            />
          </div>

          <div class="row">
            <a class="row-text">How many columns?</a>
            <input
              type=""
              class="form-control ml-4 mt-1"
              id="input-1"
              placeholder="0"
            />
          </div>
        </div>
        <div class="col-5">
          <div class="row">
            <a class="main-label">Table 2</a>
          </div>

          <div class="row mt-2">
            <a class="row-text">How many rows?</a>
            <input
              type=""
              class="form-control ml-5"
              id="input-1"
              placeholder="0"
            />
          </div>

          <div class="row">
            <a class="row-text">How many columns?</a>
            <input
              type=""
              class="form-control ml-4 mt-1"
              id="input-1"
              placeholder="0"
            />
          </div>
        </div>
        <div class="col-1 mt-5">
          <input class="btn btn-primary mb-1" type="reset" value="Reset"/>
          <input class="btn btn-primary" type="submit" value="Submit"/>
        </div>
      </div>
    );
  }
}

export default Controller;
