
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  state = {
    txt: '123',
    textArea: '',
    select: 'bj',
    ischecked: true
  }
  handleForm = (e) => {
    let name = e.target.name
    let type = e.target.type
    let value = type === 'checkbox' ? e.target.checked : e.target.value
    this.setState({
      [name]: value
    })
  }
  render() {
    return (
      <div>
        {/* 文本框 */}
        <input type="text" name='txt' value={this.state.txt} onChange={this.handleForm} /><br />
        {/* 富文本框 */}
        <textarea name='textArea' value={this.state.textArea} onChange={this.handleForm} id="" cols="30" rows="10"></textarea><br />
        {/* 下拉框 */}
        <select name='select' value={this.state.select} onChange={this.handleForm} id="">
          <option value="bj">北京</option>
          <option value="tj">天津</option>
          <option value="sh">上海</option>
        </select><br />
        {/* 复选框 */}
        <input name='ischecked' type="checkbox" checked={this.state.ischecked} onChange={this.handleForm}/>
      </div>

    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))