import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import LetsGo from './LetsGo';
import Login from './Login';
import Support from './Support';
import Dashboard from './Dashboard';
import PrivatePolicy from './PrivatePolicy';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.OpenMenu = this.OpenMenu.bind(this);
    this.CloseMenu = this.CloseMenu.bind(this);

    this.state = {
      menu: "closed"
    }
  }

  render() {
    return (
      <div className="App">
        {this.Header()}
        <main>
          <p>main text</p>
        </main>
      </div>
    );
  }

  OpenMenu(props) {
    if (this.state.menu === "closed") {
      this.setState({
        menu: "open"
      })
    }
  }

  CloseMenu(props) {
    if (this.state.menu === "open") {
      this.setState({
        menu: "closed"
      })
    }
  }

  render() {
    const header_color = this.state.menu === "closed" ? 'green' : 'white';
    return (
    <Router>
        <header className={`${header_color}`}>
          {this.state.menu === "closed" ?
            <img className="menu-icon" alt="open menu button" src="images/open_menu_white.png" onClick={this.OpenMenu}/>
            :
            <img className="menu-icon" alt="close menu button" src="images/close_menu_green.png" onClick={this.CloseMenu}/>
          }
          <h2 className="header_title">missing link</h2>
        </header>
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/letsgo' component={LetsGo} />
              <Route path='/about' component={About} />
              <Route path='/login' component={Login} />
              <Route path='/support' component={Support} />
              <Route path='/dashboard' component={Dashboard} />
              <Route path='/private-policy' component={PrivatePolicy} />
          </Switch>
      </Router>
    );
  }
}

// <nav className="navbar navbar-expand-lg navbar-light bg-light">
// <ul className="navbar-nav mr-auto">
//   <li><Link to={'/'} className="nav-link"> Home </Link></li>
//   <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
//   <li><Link to={'/about'} className="nav-link">About</Link></li>
// </ul>
// </nav>
