import React, { Component } from 'react'
import ReactDOM from 'react-dom'
// 组件通讯

// 1.父组件
class Father extends Component {
  getValue = (val) => {
    console.log(val)
  }
  render() {
    return (
      <div>
        <Child getValue={this.getValue}></Child>
      </div>
    )
  }
}

// 2.子组件
class Child extends Component {
  state = {
    value: '子组件数据'
  }
  handleClick = () => {
    this.props.getValue(this.state.value)
  }
  render() {
    return (
      <div>
        <div>子组件传递的数据：{this.state.value}</div>
        <button onClick={this.handleClick}>传递数据</button>
      </div>
    )
  }
}
ReactDOM.render(<div>
  <Father />
</div>, document.getElementById('root'))