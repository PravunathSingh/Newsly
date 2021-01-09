import React, { Component } from 'react'
import {Link} from 'react-router-dom';

class News extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-6">
                    <div className="card p-3 mb-4 shadow-sm">
                        <Link to="/USNews" className="news">Top Headlines From The United States</Link>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card p-3 mb-4 shadow-sm">
                        <Link to="/InNews" className="news">Top Headlines From India</Link>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card p-3 mb-4 shadow-sm">
                        <Link to="/BBCNews" className="news">Top Headlines From BBC</Link>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card p-3 mb-4 shadow-sm">
                        <Link to="/Categories" className="news">Top Headlines Across Different Categories</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default News;