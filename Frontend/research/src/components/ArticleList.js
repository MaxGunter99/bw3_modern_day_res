import React, { Component } from "react";
import { connect } from "react-redux";
import { getLinks, deleteLink, updateLink } from "../Actions/Index";

class ArticleList extends Component {
    state = {
        link: [],
        edit: false
    };

    render() {
        return (
            <>
                <div className="container">
                    <div className="ArticleContainer">
                        {this.props.links.map(link => (
                            <div className='ArticleWrapper' id={link.id} key={link.id}>
                                <div className="article">
                                    <h1>{link.title}</h1>
                                    <h2>{link.description}</h2>
                                    <h2>{link.category}</h2>
                                    <h4>{link.url}</h4>
                                    <p>{link.is_read}</p>
                                    <button><a href={link.url}>Go to Article</a></button>
                                    <button onClick={() => this.props.deleteLink(link.id)}>Delete</button>
                                    <button onClick={() => this.props.updateLink(link.id, link.is_read)}>Update</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = state => ({
    links: state.links,
    edit: state.editing
});

export default connect(
    mapStateToProps,
    { getLinks, deleteLink, updateLink }
)(ArticleList);