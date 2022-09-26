import React from 'react'
import ReactDOM from 'react-dom'
/* 
  setState方法说明
*/

class App extends React.Component {
  state = {
    count: 0
  }
  handleClick = () => {
    this.setState((state, prop) => {
      return {
        count: state.count + 1
      }
    })
    this.setState((state, prop) => {
      return {
        count: state.count + 1
      }
    }, () => {
      console.log('状态更新完成', this.state.count) // 2
      console.log(document.getElementById('title').innerText)
      this.setState({
        count: this.state.count + 1
      })
    })
  }
  // 是否执行更新钩子
  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState)
    console.log('更新前状态：',this.props, this.state)
    return true
  }
  render() {
    return (
      <div>
        <h1 id='title'>计数器: {this.state.count}</h1>
        <button onClick={this.handleClick}>+1</button>
      </div>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)
