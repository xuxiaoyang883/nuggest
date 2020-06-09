import React,{useState} from 'react';
import Cards from '../Cards/Cards';
import './home.css';
const Home = function Home() {
  const navList = ['热门','最新','热榜'];
  const [idx, setIdx] = useState(0);
  const data = JSON.stringify(
    [{label:"广告",author:"mike",time:"1天谴",title:"啥萨嘎金安国纪啊",id:0,zan:252,noZan:30},
    {label:"广告",author:"dock",time:"1天谴",title:"啥萨嘎金安国纪啊",id:1,zan:263,noZan:40},
    {label:"广告",author:"bob",time:"1天谴",title:"啥萨嘎金安国纪啊",id:2,zan:270,noZan:50}]
    )
  const data1 = '{"age":24,"name":"sga"}'
  const blue = 'blue'
  const listItems = navList.map((item,index) =>
    <li onClick={navClick.bind(this)} key={index} className={idx == index ? 'active' : ''} data-index={index}>
      {item}
    </li>
    
  );
  function navClick(ev){
    const index =ev.currentTarget.dataset.index;
    setIdx(ev.currentTarget.dataset.index)
  }
  window.onLoad = function(){
    var XML = new XMLHttpRequest();
  }
    return (
      <div className="Home">
        <div className="home-wrap">
          <div className="left-content">
            <>
              <ul className="nav-list">
                  {listItems}
              </ul> 
            </>
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
      </div>
    );
  }
  //ReactDOM.render(Home,document.getElementById('root'))
  export default Home