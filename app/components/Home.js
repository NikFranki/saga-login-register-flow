import React, {Component} from 'react'
import {connect} from 'react-redux'

class Home extends Component {
  render () {
    return (
      <article>
        <div>
          <section className='text-section'>
            <h1>Welcome to Login Flow!</h1>
            <p>这个应用展示了以react为基础创建的注册/登录工作流</p>
            <p>尝试用户名用 <code>juan</code> 和密码用 <code>123</code>, 接着尝试注册一个用户将会保存在localstorge，页面会重新加载</p>
          </section>

          <section className='text-section'>
            <h2>验证</h2>
            <p>
              验证 出现在
              <code>app/auth/index.js</code>,
              使用
              <code>fakeRequest.js</code>
              和
              <code>fakeServer.js</code>.
              <code>fakeRequest</code>
              是一个假的
              <code>XMLHttpRequest</code>
              包裹
              <code>fakeServer</code>
              返回一个假的HTTP请求结果，真实的数据用
              <code>bcrypt</code>
              加密后用localstorge存储在本地
            </p>
          </section>
        </div>
      </article>
    )
  }
}

function select (state) {
  return {
    data: state
  }
}

export default connect(select)(Home)
