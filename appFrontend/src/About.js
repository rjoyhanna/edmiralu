// Home.js

import React, { Component } from 'react';

export default class About extends Component {
  componentDidMount () {
    this.setState({menu: "closed"})
  }

  render() {
    return (
        <div>
          <h2 className="green_text bold">about missing link</h2>
          <p>blah blah blah</p>
          <h2 className="green_text bold">mission statement</h2>
          <p>blah blah blah</p>
        </div>
    );
  }
}
