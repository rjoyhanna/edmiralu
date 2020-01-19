// Contact.js

import React, { Component } from 'react';

class LetsGo extends Component {
  componentDidMount () {
    this.setState({menu: "closed"})
  }
  render() {
    return (
        <div>
          <h2>Lets Go</h2>
        </div>
    );
  }
}

export default LetsGo;
