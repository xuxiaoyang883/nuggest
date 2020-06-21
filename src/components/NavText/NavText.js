import React,{Component} from 'react';
import {Link,BrowserRouter,Route,HashRouter as Router,Switch,Redirect,NavLink} from 'react-router-dom';

class NavText extends Component{
    constructor(){
        super();
        this.state = {

        }
    }
    render(){
        return(
        <div className="NavText">{ /* 组件根节点 */ }
            <BrowserRouter>
                  <ul className="links">
                   {/* {sideCon} */}
                    <li>
                      <NavLink to="/welcome" activeClassName="clsActive" exact>
                        <span>推荐</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/welcome/backend" activeClassName="clsActive">
                        <span>后端</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/welcome/frontend"  activeClassName="clsActive">
                        <span>前端</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/welcome/android"  activeClassName="clsActive">
                        <span>安卓</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/welcome/ios"  activeClassName="clsActive">
                        <span>苹果</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/welcome/ai"  activeClassName="clsActive">
                        <span>人工智能</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/welcome/freebie"  activeClassName="clsActive">
                        <span>开发工具</span>
                      </NavLink>
                    </li>
                  </ul>
                <div className="content">
                  <Route path='/' component={Home} exact>
                  </Route>
                  <Route path='/Pins' component={Pins}>

                  </Route>
                  <Route path='/Topics' component={Topics}>

                  </Route>
                  <Route path='/Books' component={Books}> 
                  </Route>
                  <Route path='/Activity' component={Activity}></Route>
                </div>
            </BrowserRouter>
        </div>     
        )
    }
}