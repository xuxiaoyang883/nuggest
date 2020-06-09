import React,{Component}from 'react';


//搜索框
class SearchBar extends Component {
    constructor(){
        super();
        this.state = {

        }
    }
    render(){
        return (
            <div className="searchBar">
                <form action="http://localhost:3000" className="search-form">
                    <input type="text" className="search-input" />
                    <img src="src/images/juejin-search-icon.6f8ba1b.svg" alt="搜搜" className="search-icon" />
                </form>
            </div>
        )    
    }
}