
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// 非受控组件

class App extends Component {
  constructor() {
    super()
    
    this.txtRef = React.createRef()
  }
  handleClick = () => {
    console.log(this.txtRef.current.value)
  }
  render() {
    return (
      <div>
        {/* 文本框 */}
        <input type="text" ref={this.txtRef} /><br />
        <button onClick={this.handleClick}>获取输入框的值</button>
      </div>

    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))