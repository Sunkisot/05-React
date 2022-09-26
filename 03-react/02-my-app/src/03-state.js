
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     count: 0
  //   }
  //   this.handleCalc = this.handleCalc.bind(this)
  // }
  // 简化语法
  state = {
    count: 10
  }
  handleCalc = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  render() {
    return (
      <div>
        <h1>计数器：{this.state.count}</h1>
        <button onClick={this.handleCalc}>+1</button>
        <button onClick={this.handleCalc}>-1</button>
      </div>

    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))