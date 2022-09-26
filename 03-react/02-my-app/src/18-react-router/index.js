import React from 'react'
import ReactDOM from 'react-dom'

/* 
  react-router
  1. npm i react-router-dom
*/
// 2.导入组件
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
// import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom'

const First = () => <p>页面一的内容</p>

// 3.使用Router组件包裹整个应用
class App extends React.PureComponent {
  render() {
    return (
      <Router>
        <h1>React-Router</h1>
        {/* 4.指定路由入口 */}
        <Link to='/first'>页面一</Link>
        <Routes>
          {/* 5.指定路由出口 */}
          <Route path='/first' element={<First></First>}></Route>
        </Routes>
      </Router>

    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
