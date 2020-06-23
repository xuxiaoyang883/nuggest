import React,{Component} from 'react';
import {Link,BrowserRouter,Route,HashRouter as Router,Switch,Redirect,NavLink} from 'react-router-dom';
import AI from '../AI/AI';
import Android from '../Android/Android';
import Backend from '../Backend/Backend';
import Freebie from '../Freebie/Freebie';
import Frontend from '../Frontend/Frontend';
import Ios from '../Ios/Ios';
import Welcome from '../Welcome/Welcome';
import './NavText.css';

class NavText extends Component{
    constructor(){
        super();
        this.state = {

        }
    }
    render(){
        return(
        <div className="NavText logo-wrap">{ /* 组件根节点 */ }
            <BrowserRouter>
                  <ul className="links revise">
                    <li>
                      <NavLink to="/" activeClassName="clsActive" exact>
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
                  <Route path='/welcome' render={()=>
                      <Welcome>
                          <Route path='/welcome/backend' component={Backend}>
                          </Route>
                          <Route path='/welcome/frontend' component={Frontend}>
                          </Route>
                          <Route path='/welcome/android' component={Android}> 
                          </Route>
                          <Route path='/welcome/ios' component={Ios}></Route>
                          <Route path='/welcome/ai' component={AI}></Route>
                          <Route path='/welcome/freebie' component={Freebie}></Route>
                           
                      </Welcome>
                  }></Route>
                </div>
            </BrowserRouter>
        </div>     
        )
    }
}
export default NavText