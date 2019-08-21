import React, { Component } from "react";
import { connect } from "react-redux";
import { getLinks, deleteLink, updateLink } from "../Actions/Index";

class ArticleList extends Component {
    state = {
        link: [],
    }

    render() {
        return (
            <>
                <div className="container">
                    <div className="ArticleContainer">
                        {this.props.links.map(link => { 
                            // if (link.is_read === 1){console.log(link.id, 'is read')} else {console.log(link.id, 'is not read yet')}
                            function statusOfRead(){if (link.is_read === 1){return('Complete')} else {return('Not read yet')}}
                            
                            return(
                            <div className='ArticleWrapper' id={link.id} key={link.id}>
                                <div className="article" id='read'>
                                    <h1>#{link.id}</h1>
                                    <h2>Category: {link.category}</h2>
                                    <p><strong>Status:</strong> {statusOfRead()}</p>
                                    <div className='buttons'>
                                        <button><a href={link.url}>Go to Article</a></button>
                                        <button classNmae='delete'onClick={() => this.props.deleteLink(link.id)}>Delete</button>
                                        <button onClick={() => this.props.updateLink(link.id, link.is_read)}>Mark as Read</button>
                                    </div>
                                </div>
                            </div>
                        )})}
                    </div>
                </div>
            </>
        );
    }
}



const mapStateToProps = state => ({
    links: state.links,
});

export default connect(
    mapStateToProps,
    { getLinks, deleteLink, updateLink }
)(ArticleList);