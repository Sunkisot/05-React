import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

/* 
  render props 模式
*/
import img from './cat.png'

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
    return this.props.children(this.state)
  }
}
Mouse.propTypes = {
  children: PropTypes.func.isRequired
}

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>render props 模式</h1>
        <Mouse >
          {mouse => {
            return (
              <p>鼠标位置：[{mouse.x + ',' + mouse.y}]</p>
            )
          }}
        </Mouse>
        <Mouse >
          {mouse => {
            return <img style={{ position: 'fixed', top: mouse.y, left: mouse.x }} src={img} alt='猫'></img>
          }}
        </Mouse>
      </div>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)
