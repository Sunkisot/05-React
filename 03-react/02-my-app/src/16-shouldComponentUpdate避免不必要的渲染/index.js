import React from 'react'
import ReactDOM from 'react-dom'
/* 
  shouldComponentUpdate避免不必要的渲染
*/

class App extends React.Component {
  state = {
    count: 0
  }
  handleClick = () => {
    let newCount = Math.floor(Math.random() * 10)
    console.log(newCount)
    this.setState({
      count: newCount
    })
  }
  shouldComponentUpdate(nextProps, nextState) {
    return nextState.count !== this.state.count
  }
  render() {
    console.log('render')
    return (
      <div>
        <h1 id='title'>随机数: {this.state.count}</h1>
        <button onClick={this.handleClick}>重新生成</button>
      </div>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)
