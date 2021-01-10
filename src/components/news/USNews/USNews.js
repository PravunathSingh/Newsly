import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Spinner from '../../layout/Spinner'
import US from './US'
import axios from 'axios'
import {v4 as uuid} from 'uuid'

class USNews extends Component {
    state = {
        news: [],
        heading: 'Top Headlines From The United States',
        id: uuid()
    }

    componentDidMount() {
        axios.get('https://newsapi.org/v2/top-headlines?country=us&pageSize=24&apiKey=0fb4e3906e844d25a06d3bcb65fceb49')
            .then(res => {
                // console.log(res.data.articles);
                this.setState({news: res.data.articles})
            })
    }

    render() {
        const {news, heading, id} = this.state;
        if(news === undefined || news.length === 0) {
            return <Spinner />
        } else{
            return (
                <div>
                    <Link to="/" className="btn btn-primary mb-4"><i className="fa fa-chevron-left"></i> Back To Home</Link>
                    <h5 className="text-center mb-3 heading">{heading}</h5>
                    <div className="row">
                        {news.map(article => (
                            <div className="col-md-6 mb-4">
                                <US article={article} key={id}/>
                            </div>
                        ))}
                    </div>
                </div>
            )
        }
        
    }
}

export default USNews;
