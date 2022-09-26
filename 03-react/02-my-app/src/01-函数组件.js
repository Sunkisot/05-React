// 1.倒入react
import React from 'react'
import ReactDOM from 'react-dom'

function Hello() {
  function handleClick() {
    console.log('hello react')
  }
  return (
    <div onClick={handleClick}>hello react</div>
  )
}

ReactDOM.render(<Hello />, document.getElementById('root'))