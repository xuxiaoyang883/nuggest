import React, { Component } from 'react'
import {withRouter,Link} from 'react-router-dom'
 
class Welcome extends Component {
    render() {
        return (
            <div>
                Welcome页面
                {this.props.children}
            </div>
        )
    }
}
export default withRouter(Welcome)