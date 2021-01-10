import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Categories extends Component {
    render() {
        return (
            <React.Fragment>
                <Link to="/" className="btn btn-primary mb-5"><i className="fa fa-chevron-left"></i> Back To Home</Link>
                <div className="row">
                    <div className="col-md-3">
                        <div className="card shadow mb-4 p-3">
                            <Link to="/Categories/Business" className="text-dark business"><h3>Top Headlines in Business</h3></Link>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-4">
                        <div className="card shadow mb-4 p-3">
                            <Link to="/Categories/Science" className="text-dark science"><h3>Top Headlines in Science</h3></Link>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-4">
                        <div className="card shadow mb-4 p-3">
                            <Link to="/Categories/Technology" className="text-dark technology"><h3>Top Headlines in Techology</h3></Link>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-4">
                        <div className="card shadow mb-4 p-3">
                            <Link to="/Categories/Health" className="text-dark health"><h3>Top Headlines in Health</h3></Link>
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-4">
                        <div className="card shadow mb-4 p-3">
                            <Link to="/Categories/General" className="text-dark general"><h3>Top Headlines in General</h3></Link>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-4">
                        <div className="card shadow mb-4 p-3">
                            <Link to="/Categories/Sports" className="text-dark"><h3 className="sports">Top Headlines in Sports</h3></Link>
                        </div>
                    </div>
                </div>
                
            </React.Fragment>
        )
    }S
}

export default Categories;
