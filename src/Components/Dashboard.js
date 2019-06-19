import React  , { Component } from "react";
import { withRouter } from "react-router"

class Dashboard extends Component {
  render() {
      return(<div className="container">
          <h1>Dashboard </h1>
      </div>)
  }
}
export default withRouter(Dashboard)