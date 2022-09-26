import React, { Component } from 'react'
import ReactDOM from 'react-dom'
// props.children

// 1.父组件
class Father extends Component {
  render() {
    return (
      <div>
        控制台打印：
        {this.props.children()}
      </div>
    )
  }
}

ReactDOM.render(<div>
  <Father>{ () => {console.log('这是一个函数')}}</Father>
</div>, document.getElementById('root'))