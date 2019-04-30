import React from 'react';

function Home(props) {
    const routeToShop = event => {
        event.preventDefault();
        props.history.push('/ArticleList');
    };

    return (
        <div className="home-wrapper">
            <button onClick={routeToShop} className="md-button shop-button">Get Started</button>
        </div>
    );
}

export default Home;