
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Title from './components/Hello'

class Hello extends Component {
  handleClick() {
    console.log('类组件')
  }
  // e 事件对象
  handleTo(e) {
    e.preventDefault()
  }
  render() {
    return (
      <div>
        <div onClick={this.handleClick}>类组件</div>
        <a href="https://www.baidu.com/" onClick={this.handleTo}>百度一下</a>
      </div>

    )
  }
}

ReactDOM.render(<div>
  <Hello />
  <Title></Title>
</div>, document.getElementById('root'))