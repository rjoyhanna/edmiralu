// Home.js

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


class Home extends Component {
  render() {
    return (
        <div className="flex_container">
          <p className="black_text">it's time to find your</p>
          <p className="green_text bold">missing link</p>
          <Link to={'/letsgo'} className="nav-link"><button className="red_button">let's go!</button></Link>
        </div>
    );
  }
}

export default Home;
