import React from 'react'
import ReactDOM from 'react-dom'

/* 
  组件的生命周期
*/


class App extends React.Component {
  constructor(props) {
    super(props)
    // 1.初始化state
    // 2.为事件处理程序绑定this
    console.warn('生命周期钩子：constructor')

    this.state = {
      count: 0
    }
  }
  handleClick = () => {
    this.setState({
      count: this.state.count + 1
    })

    // this.forceUpdate()
  }

  // 组件挂在完
  componentDidMount() {
    // 1.发送网络请求
    // 2.DOM操作
    console.warn('生命周期钩子：componentDidMount')
  }
  render() {
    // 渲染UI（注意不能调用this.setState）
    console.warn('生命周期钩子：render')
    return (
      <div>
        {this.state.count > 3 ? <p>豆豆被打死了～</p> : <Counter count={this.state.count} ></Counter>}
        <button onClick={this.handleClick}>打豆豆</button>
      </div>
    )
  }
}

class Counter extends React.Component {
  // 组件卸载完成
  componentWillUnmount() {
    console.warn('生命周期钩子：componentWillUnmount')
    clearTimeout(this.timeId)
  }
  // 组件更新完
  componentDidUpdate(prevProps) {
    console.warn('生命周期钩子：componentDidUpdate')
    console.log(`上次${prevProps.count}, 这次${this.props.count}`)
    if (prevProps.count !== this.props.count) {
      this.setState({})
    }
  }
  // 组件挂载完成
  componentDidMount() {
    this.timeId = setInterval(() => {
      console.log('我是定时器')
    }, 500)
  }
  render() {
    return (
      <h1>统计豆豆被打次数：{this.props.count}</h1>
    )
  }
}

ReactDOM.render(
  <App number={20} />,
  document.getElementById('root')
)
