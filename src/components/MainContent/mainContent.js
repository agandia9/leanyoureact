import React, {Component} from 'react'

export default class MainContens extends Component {
    render(){
        return(
            <div className="mainContent">
                {Object.keys(this.props.userdata).length > 0 
                ?  <div>
                    <p>Name: {this.props.userdata.name}</p>
                    <img src={this.props.userdata.avatar_url} alt=""/>
                    <p>Bio: {this.props.userdata.bio}</p>
                    <span>Social: <p>{this.props.userdata.followers}</p><p>{this.props.userdata.following}</p></span>
                    <p>Location: {this.props.userdata.location}</p>
                </div>
                : <h3>{this.props.children}</h3>}
            </div>
        )
    }
}