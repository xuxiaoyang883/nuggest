import React from 'react';
import Cards from '../Cards/Cards';
function Home() {
  const navList = ['热门','最新','热榜'];
  const data = JSON.stringify([{label:"广告",author:"sags",time:"1天谴",title:"啥萨嘎金安国纪啊"},{label:"广告",author:"sags",time:"1天谴",title:"啥萨嘎金安国纪啊"},{label:"广告",author:"sag",time:"1天谴",title:"啥萨嘎金安国纪啊"}])
  const data1 = '{"age":24,"name":"sga"}'
  const blue = 'blue'
  const listItems = navList.map((item) =>
    <li onClick="navClick">{item}</li>
  );
  function navClick(ev){
    console.log(ev)
  }
  window.onLoad = function(){
    var XML = new XMLHttpRequest();
  }
    return (
      <div className="Home">
          <div className="left-content">
              <nav>
                <ul className="nav-list">
                    <list-items></list-items>
                </ul> 
              </nav>
              <Cards data={data} />
          </div>
          <div className="right-content">
              <form className="login">
                  <h4>掘金 - juejin.im</h4>
                  <div>一个帮助开发者成长的社区</div>
                  <input type="text" placeholder="用户名" />
                  <input type="text" placeholder="手机号" />
                  <input type="password" placeholder="密码（不少于6位）" />
                  <button>立即注册</button>
                  <div>登录注册 即表示</div>
                  <div>同意<span style={{color:blue}}>用户协议、用户政策</span></div>
              </form>
              <div className="advertise">广告栏</div>
          </div>
      </div>
    );
  }

  export default Home