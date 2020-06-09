import React,{Component}from 'react';
import './searchBar.less';  
//搜索框
class SearchBar extends Component {
    constructor(){
        super();
        this.state = {
           src:require('../../images/juejin-search-icon.6f8ba1b.svg'),    //juejin-search-icon.6f8ba1b.svg
           style1:'background: #ccc',
           style2:'2px solid #e5e6e7'
        }
        this.onInput = this.onInput.bind(this);
        this.onBlur = this.onBlur.bind(this);
    }
    onInput(ev){
        this.setState({
            src:require('../../images/juejin-search-icon-focus.470748c.svg'),
            style1:'transparent',
            style2:'2px solid #007fff;'
        })
    }
    onBlur(ev){
        this.setState({
            src:require('../../images/juejin-search-icon.6f8ba1b.svg'),
            style1:'transparent',
            style2:'2px solid #e5e6e7;'
        })
    }
    render(){
        const {src,style1,style2} = this.state;
        return (
            <div className="searchBar">
                <form action="http://localhost:3000" className="search-form">
                    <input type="text" className="search-input" placeholder="搜索掘金" onInput={this.onInput} onBlur={this.onBlur} 
                    style={{background:style1,border:style2}} />
                    <img src={src} alt="搜搜" className="search-icon" />
                </form>
            </div>
        )    
    }
}
export default SearchBar