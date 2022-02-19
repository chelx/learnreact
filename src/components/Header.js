import React, { Component } from 'react'
import logo from "../logo.svg"

export default class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {
      hello: "First project",
      seconds: 0
    }
  }

  render () {
    return (
    <div>
      <img src={logo} alt="logo" />
      <div className="navigator">
      
      </div>
    </div>);
  }
}