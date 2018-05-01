import React, {Component} from 'react'

export default class SearchForm extends Component {
    render(){
        return(
            <div>
                <form 
                    onSubmit={this.props._handlerSearchName}
                    className="search-form"
                >
                    <input
                     onChange={this.props._handlerWriteName} 
                     type="text" 
                     placeholder="your github name"
                    />
                    <button>Search for me, slave!</button>
                </form>
            </div>
        )
    }
}

