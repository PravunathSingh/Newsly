import React, { Component } from 'react'
import {Link , withRouter} from 'react-router-dom'
import SearchResult from './SearchResult'

class Search extends Component {
    state = {
        query: ''
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.history.push('/Search');
        
        this.setState({query: ''})
    }

    render() {
        const {query} = this.state
        return (
            <div className="card card-body mb-4 p-4 shadow">
                <h2 className="display-4 text-center mb-5">
                    <i className="fa fa-newspaper"></i> Get Global News
                </h2>
                <form onSubmit={this.onFormSubmit}>
                    <Link type="submit" to={{pathname: `/Search`, query: {query}}} query={this.state.query} onSubmit={this.onFormSubmit} className="btn btn-block btn-primary btn-lg">Get Articles <i className="fa fa-search"></i></Link>
                </form>
            </div>
        )
    }
}

export default withRouter(Search);