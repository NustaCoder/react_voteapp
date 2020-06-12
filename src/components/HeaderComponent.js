import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);

  };

  render() {
    return (
      <React.Fragment>
        <nav class="navbar navbar-dark">
          <a class="navbrand" href="#">Cicada</a>
        </nav>
      </React.Fragment>
    );
  }
}

export default Header
