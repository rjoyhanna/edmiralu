// Home.js

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


class Home extends Component {
  render() {
    return ([
        <div className="flex_container">
          <p className="black_text">it's time to find your</p>
          <p className="green_text bold">missing link</p>
          <Link to={{pathname: '/letsgo', state: {menu: "closed"}}} className="nav-link"><button className="red_button">let's go!</button></Link>
        </div>,

        <div className="flex_container green">
          <div className="flex_container flex_row square_header">
            <div className="square"></div>
            <h2 className="white_text bold nowrap">who we are</h2>
            <div className="line"></div>
          </div>
          <p className="white_text">Missing link... blah blah blah</p>
          <div className="flex_container flex_row square_header">
            <div className="line"></div>
            <h2 className="white_text bold nowrap">why IRL?</h2>
            <div className="square"></div>
          </div>
          <p className="white_text">in an increasingly digital... blah blah blah</p>

        </div>]
    );
  }
}

export default Home;
