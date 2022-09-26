import React from 'react'

export default class CmtItem extends React.Component {
  render() {
    return <div>
      <p>名字：{this.props.name}</p>
      <span>年龄：{this.props.age}</span>
    </div>
  }
}