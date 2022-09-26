import React from 'react'
import CmtItem from '@/components/cmtItem'

import cssObj from '@/css/cmtList.scss'
console.log(cssObj)
export default class CmtList extends React.Component {
  constructor() {
    super()
    this.state = {
      title: '人员名单'
    }
  }
  changeTitle() {
    this.setState({'title': '人员'})
    // 
  }
  inputTitle(e) {
    this.refs.input.value
    let newVal = e.target.value
    this.setState({'title': newVal})
  }
  render() {
    return <div>
      <h1 className={[cssObj.title, 'fontItalic'].join(' ') }>{this.state.title}</h1>
      <hr/>
      <input ref='input' type="text" value={this.state.title} onChange={(e) => this.inputTitle(e)}/>
      <button className={['btn','btn-primary'].join(' ')} onClick={ ()=> this.changeTitle() }>按钮</button>
      <hr/>
      {this.props.list.map((e, i) => <CmtItem {...e} key={i}></CmtItem>)}
    </div>
  }
  
}