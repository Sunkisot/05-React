// 这是一个入口文件
// console.log('main.js') 
import React from 'react'
import ReactDOM from 'react-dom'
// React.createElement
// 参数1 创建元素类型，字符串 表示元素名称
// 参数2 是一个对象或null, 表示当前这个dom元素的属性
// 参数3 子节点（包括其他虚拟dom，或文本子节点）
// const myh1 = React.createElement('h1', { id: 'myh1', title: 'aaa'}, '这是一个h2')
import 'bootstrap/dist/css/bootstrap.min.css'
import CmtList from '@/components/cmtList'
const list = [
  {
    name: '小明',
    age: 18
  },
  {
    name: '小红',
    age: 20
  }
]
// ReactDOM.render
// 参数1 虚拟dom
// 参数2 指定页面上的一个容器dd
ReactDOM.render(<div>
  <CmtList list={list}></CmtList>
</div>, document.getElementById('app'))