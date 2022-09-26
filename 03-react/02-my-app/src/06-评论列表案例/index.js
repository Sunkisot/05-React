import React from 'react'
import ReactDOM from 'react-dom'

/* 
  评论列表案例

  comments: [
    { id: 1, name: 'jack', content: '沙发！！！' },
    { id: 2, name: 'rose', content: '板凳~' },
    { id: 3, name: 'tom', content: '楼主好人' }
  ]
*/

import './index.css'

class App extends React.Component {
  state = {
    comments: [
      { id: 1, name: 'jack', content: '沙发！！！' },
      { id: 2, name: 'rose', content: '板凳~' },
      { id: 3, name: 'tom', content: '楼主好人' }
    ],
    userName: '',
    userContent: ''
  }
  handleForm = (e) => {
    let name = e.target.name
    this.setState({
      [name]: e.target.value
    })
  }
  // 发布评论
  handlePub = () => {
    let { userName, userContent, comments } = this.state
    if(userName.trim() === '' || userContent.trim() === '') {
      alert('请输入评论人和评论内容！！')
      return
    }
    let newComments = [{
      id: Math.random(),
      name: userName,
      content: userContent
    }, ...comments]
    this.setState({
      comments: newComments,
      userName: '',
      userContent: ''
    })
  }
  // 评论列表
  renderList() {
    let { comments } = this.state
    return comments.length === 0 ?
      (<div className="no-comment">暂无评论，快去评论吧~</div>) :
      (<ul>
        {this.state.comments.map(e =>
        (<li key={e.id}>
          <h3>评论人：{e.name}</h3>
          <p>评论内容：{e.content}</p>
        </li>))}
      </ul>)
  }
  render() {
    let { userName, userContent } = this.state
    return (
      <div className="app">
        <div>
          <input name='userName' value={userName} className="user" type="text" placeholder="请输入评论人" onChange={this.handleForm} />
          <br />
          <textarea
            name='userContent'
            value={userContent}
            className="content"
            cols="30"
            rows="10"
            placeholder="请输入评论内容"
            onChange={this.handleForm}
          />
          <br />
          <button onClick={this.handlePub}>发表评论</button>
        </div>
        {this.renderList()}


      </div>
    )
  }
}

// 渲染组件
ReactDOM.render(<App />, document.getElementById('root'))
