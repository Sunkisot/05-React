import React from 'react'

// export default function Hello(props) {
//   return <div>name: {props.name}, age: {props.age}</div>
// }
export default class Hello extends React.Component {
  constructor() {
    super()
    this.state = {
      msg: '你好msg'
    }
  }
  render() {
  return <div>name: {this.props.name}, age: {this.props.age} -- {this.state.msg}</div>
  }
}