import React, { Component } from 'react';

class Item extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
    <div>
      <h1>{this.props.record.author}</h1>
      <span>{this.props.record.date}</span>
      <p>
        {this.props.record.content}
      </p>
    </div>
    )
  }
}

export default Item