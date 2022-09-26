import React from 'react'
import ReactDOM from 'react-dom'

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
  componentDidMount() {
    window.addEventListener('mousemove', this.handleMouse)
  }
  render() {
    return this.props.render(this.state)
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>render props 模式</h1>
        <Mouse render={mouse => {
          return (
            <p>鼠标位置：[{mouse.x + ',' + mouse.y}]</p>
          )
        }}></Mouse>
        <Mouse render={mouse => {
          return <img style={{position: 'fixed', top: mouse.y, left: mouse.x}} src={img}></img>
        }}></Mouse>
      </div>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)
