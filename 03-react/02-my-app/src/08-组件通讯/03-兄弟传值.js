import React, { Component } from 'react'
import ReactDOM from 'react-dom'
// 组件通讯

// 父组件（状态提升）
class Counter extends Component {
  state = {
    count: 0
  }
  getVal = (val) => {
    this.setState({
      count: this.state.count + 1
    })
  }
  render() {
    return (
      <div>
        <Child1 count={this.state.count} />
        <Child2 getVal={this.getVal} />
      </div>
    )
  }
}

// 2.子组件1
function Child1(props) {
  return (
    <div>计数器：{props.count} </div>
  )
}
// 3.子组件2
class Child2 extends Component {
  handleClick = () => {
    this.props.getVal()
  }
  render() {
    return (
      <button onClick={this.handleClick}>+1</button>
    )
  }
}
ReactDOM.render(<div>
  <Counter />
</div>, document.getElementById('root'))