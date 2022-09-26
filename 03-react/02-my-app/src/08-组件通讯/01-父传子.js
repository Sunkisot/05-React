import React, { Component } from 'react'
import ReactDOM from 'react-dom'
// 组件通讯

// 1.父组件
class Father extends Component {
  state = {
    lastName: '王'
  }
  render() {
    return (
      <div>
        <Child name={this.state.lastName}></Child>
      </div>
    )
  }
}

// 2.子组件
class Child extends Component {
  render() {
    return (
      <div>子组件接受到的数据：{this.props.name}</div>
    )
  }
}
ReactDOM.render(<div>
  <Father />
</div>, document.getElementById('root'))