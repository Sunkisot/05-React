import React from 'react'
import ReactDOM from 'react-dom'

/* 
  props默认值
*/


const App = props => {
  return (
    <div>
      此处展示props的默认值：{props.number}
    </div>
  )
}
App.defaultProps = {
  number: 10
}



ReactDOM.render(
  <App number={20} />,
  document.getElementById('root')
)
