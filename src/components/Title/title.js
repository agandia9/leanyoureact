import React, {Component} from 'react'

export default class Title extends Component {
    render(){
        return <div>
            {Object.keys(this.props.userdata).length > 0 
            ?  <h1> You searched: {this.props.userdata.login} </h1>
            : <h1>{this.props.children}</h1>}
        </div>
    }
}