import React from 'react';
import { Route, NavLink } from 'react-router-dom';

import ArticleDescription from './ArticleDescription';

function Article(props) {
    const article = props.articles.find(
        thing => `${thing.id}` === props.match.params.id
    );

    if (!props.articles.length || !article) {
        return <h2>Loading article data...</h2>;
    }

    return (
        <div className="item-wrapper">
            <div className="item-header">
                <div className="image-wrapper">
                    <img src={article.imageUrl} alt={article.name} />
                </div>
                <div className="item-title-wrapper">
                    <h2>{article.name}</h2>
                </div>
            </div>
            <nav className="item-sub-nav">
                <NavLink exact to={`/ArticleList/${article.id}`}>
                    URL
                </NavLink>
            </nav>
            <Route
                exact
                path="/ArticleList/:id"
                render={props => <ArticleDescription {...props} article={article} />}
            />
            <button onClick={() => props.deleteArticle(article.id)}>Delete</button>
            <button onClick={() => {props.setupUpdate(article)}}>Update</button>
        </div>
    );
}

export default Article;