import React from 'react'
import ReactDOM from 'react-dom'
import img from '../13-render props模式/cat.png'
/* 
  高阶组件模式
*/
// 创建高阶组件
function withMouse(WrappedCpmponent) {
  class Mouse extends React.Component {
    state = {
      x: 0,
      y: 0
    }
    handleMouse = e => {
      this.setState({
        x: e.clientX,
        y: e.clientY
      })
    }
    componentWillUnmount() {
      window.removeEventListener('mousemove', this.handleMouse)
    }
    componentDidMount() {
      window.addEventListener('mousemove', this.handleMouse)
    }
    render() {
      return <WrappedCpmponent {...this.state} {...this.props}></WrappedCpmponent>
    }
  }
  Mouse.displayName = `WithMouse${getDisplayName(WrappedCpmponent)}`
  return Mouse
}
function getDisplayName(WrappedCpmponent) {
  return WrappedCpmponent.displayName || WrappedCpmponent.name || 'Component'
}
// 用在测试高阶组件
const Position = props => (
  <div>鼠标的位置是：[{props.x + ',' + props.y}]</div>
)
const Cat = props => (
  <img style={{ position: 'fixed', top: props.y, left: props.x }} src={img} alt='猫'></img>
)
// 获取增强后的组件
const MousePosition = withMouse(Position)
const MouseCat = withMouse(Cat)


class App extends React.Component {
  render() {
    return (
      <div>
        <h1>高阶组件</h1>
        <MousePosition a='1'></MousePosition>
        <MouseCat></MouseCat>
      </div>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)
