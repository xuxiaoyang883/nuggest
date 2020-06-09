// eslint-disable-next-line
import React,{Component}from 'react';
import './header.css';
// eslint-disable-next-line
import {Link,BrowserRouter, Route,HashRouter as Router,Switch,Redirect,NavLink} from 'react-router-dom';
import Activity from '../Activity/Activity';
import Books from '../Books/Books';
import Pins from '../Pins/Pins';
import Topics from '../Topics/Topics';
import Home from '../Home/Home';
import SearchBar from '../SearchBar/SearchBar'

//导航栏头部

class Header extends Component {
  constructor() {
    super();
    this.state = {
      sideBarConfig: [
        {link: '/', text: '首页'},
        {link: '/Pins', text: '沸点'},
        {link: '/Topics',text: '话题'},
        {link: '/Books', text: '小册'},
        {link: '/Activity',text: '活动'}
      ]
    }
  }
 render(){
  const { sideBarConfig} = this.state;
  // eslint-disable-next-line
  var sideCon = sideBarConfig.map(function (conf) {
    return <li key={conf.link}>
              <Link to={conf.link} activeClassName="clsActive">
                <span>{conf.text}</span>
              </Link>
            </li>
    })
 
      return (
        <div className="Header">{ /* 组件根节点 */ }
            <BrowserRouter>
              <div className="navigator-wrap"> 
                <div className="logo-wrap">
                  <img src={require('../../images/logo.jpg')} alt="" />
                  <ul className="links">
                   {/* {sideCon} */}
                  
                    <li>
                      <NavLink to="/" activeClassName="clsActive" exact>
                        <span>首页</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/Pins" activeClassName="clsActive">
                        <span>沸点</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/Topics"  activeClassName="clsActive">
                        <span>话题</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/Books"  activeClassName="clsActive">
                        <span>小册</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/Activity"  activeClassName="clsActive">
                        <span>活动</span>
                      </NavLink>
                    </li>
                  </ul>
                  <SearchBar></SearchBar>
                  <ul className="right">
                      <li className="">
                        <img src={require('../../images/submit-icon.53f4253.svg')} alt="submit"/>
                        <span>文章</span>
                      </li>
                      <li className="">
                        <span>登录</span>
                        <span>注册</span>
                      </li>
                  </ul>
                </div>
                <div className="content">
                  <Route path='/' component={Home} exact/>
                  <Route path='/Pins' component={Pins} />
                  <Route path='/Topics' component={Topics} />
                  <Route path='/Books' component={Books} /> 
                  <Route path='/Activity' component={Activity} />
                </div>
               </div>
            </BrowserRouter>
        </div>
      );
    }
  }
  
  export default Header