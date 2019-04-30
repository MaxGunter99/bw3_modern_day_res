import React from 'react';

function ArticleList(props) {
    function routeToItem(ev, link) {
        ev.preventDefault();
        props.history.push(`/ArticleList/${link.id}`);
    }
    
    return (
        <div className="ArticleList">
            {props.links.map(link=> (
                <div
                    onClick={event => routeToItem(event, link)}
                    className="item-card"
                    key={link.id}
                >
                    <p>{link.url}</p>
                    <p>{link.category}</p>
                </div>
            ))}
        </div>
    );
}

export default ArticleList;