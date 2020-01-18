import React from 'react';
// import logo from './logo.svg';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.OpenMenu = this.OpenMenu.bind(this);
    this.CloseMenu = this.CloseMenu.bind(this);
    this.Header = this.Header.bind(this);

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

  Header() {
    return (
      <header className="App-header">
      {this.state.menu === "closed" ?
        <img className="menu-icon" alt="open menu button" src="images/open_menu.png" onClick={this.OpenMenu}/>
        :
        <img className="menu-icon" alt="close menu button" src="images/close_menu.png" onClick={this.CloseMenu}/>
      }
        <div className="title-group">
          <img className="menu-icon" src="images/logo-placeholder-png.png" alt="placeholder logo" height="100" width="100"/>
          <h1>Header</h1>
        </div>
      </header>
    )
  }
}
