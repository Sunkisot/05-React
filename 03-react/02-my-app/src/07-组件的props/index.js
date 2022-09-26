import React, { Component } from 'react'
import ReactDOM from 'react-dom'
// 组件的props
// 1.函数组件
function Hello(props) {
  return (
    <div>
      <div>name: {props.name}</div>
      {props.tag}
    </div>
  )
}
// 2.类组件
class Title extends Component {
  // props作为参数
  // constructor(props) {
  //   super(props)
  // }
  render() {
    return (
      <div>name: {this.props.name}</div>
    )
  }
}
ReactDOM.render(<div>
  <Hello name='Hello' tag={<p>这是个p标签</p>} />
  <Title name='Title' />
</div>, document.getElementById('root'))