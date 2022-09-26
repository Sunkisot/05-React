// 1.倒入react
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

// let title = React.createElement('h1', null, 'react脚手架')
// let title = <h1>react脚手架<p>test</p></h1>

var songs = [
  { id: 1, name: '痴心绝对' },
  { id: 2, name: '南山南' },
  { id: 3, name: '想我这样的人' }
]
// let content = (
//   <div>{songs.find(e => e.id === 1).name}</div>
// )
let content = (
  <div>{songs.map(e => <li key={e.id} style={{ background: 'blue', color: '#fff' }} className='title'>{e.name}</li>)}</div>
)

ReactDOM.render(content, document.getElementById('root'))