import React from 'react';

function ArticleList(props) {
    function routeToItem(ev, article) {
        ev.preventDefault();
        props.history.push(`/ArticleList/${article.id}`);
    }
    return (
        <div className="ArticleList">
            {props.articles.map(article=> (
                <div
                    onClick={event => routeToItem(event, article)}
                    className="item-card"
                    key={article.id}
                >
                    <img
                        className="item-list-image"
                        src={article.url}
                        alt={article.category}
                    />
                    <p>{article.name}</p>
                </div>
            ))}
        </div>
    );
}

export default ArticleList;