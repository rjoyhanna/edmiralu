// Home.js

import React, { Component } from 'react';

export default class About extends Component {
  componentDidMount () {
    this.setState({menu: "closed"})
  }
  
  render() {
    return (
        <div>
          <h2>About</h2>
        </div>
    );
  }
}
