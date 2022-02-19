import React, { Component } from 'react';
import Item from './Item'

class List extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
    <div>
      {this.props.data.map((record, index) => {
        return <Item key={index} record={record} />
      })}
    </div>
    )
  }
}

export default List