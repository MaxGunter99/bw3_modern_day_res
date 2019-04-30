import React from 'react';

function ArticleDescription(props) {
    return (
        <div>
            <p className="description">{props.article.description}</p>
        </div>
    );
}

export default ArticleDescription;