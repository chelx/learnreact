import React, { Component } from 'react'
import List from "./List"

export default class Main extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [
        {
          author: "Ngo Tat To 1",
          content: "Tat den",
          date: "11/11/11"
        },
        {
          author: "Ngo Tat To 2",
          content: "Tat den",
          date: "11/11/11"
        },
        {
          author: "Ngo Tat To 3",
          content: "Tat den",
          date: "11/11/11"
        },
      ]
    }
  }

  render () {
    return (
    <div>
      <List data={this.state.data} />
    </div>);
  }
}