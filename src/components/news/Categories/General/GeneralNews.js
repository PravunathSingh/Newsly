import React from 'react'

const GeneralNews = ({article}) => {
    return (
        <div className="card shadow p-3">
            <img src={article.urlToImage} alt="Hey" className="img-fluid mb-3"/>
            <h5 className="card-title mb-3">Title: <span className="text-secondary">{article.title}</span></h5>
            <p className="lead mb-3 source">Source: <span className="text-secondary">{article.source.name}</span></p>
            <p className="lead mb-2">Link to complete article: <a target="_blank" rel="noreferrer" href={article.url}>{article.url}</a></p>
        </div>
    )
}

export default GeneralNews;
