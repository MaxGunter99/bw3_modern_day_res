import React, { Component } from "react";
import { connect } from "react-redux";
import { getLinks, deleteLink, updateLink } from "../../Actions/Index";

class Art extends Component {
    state = {
        link: [],
        edit: false
    }

    render() {
        return (
            <>
                <div className="container">
                    <div className="ArticleContainer">
                        <div className='readNotification'></div>
                        {this.props.links.map(link => { 
                            if (link.category === 'Art'){
                                return(
                                    <div className='ArticleWrapper' id={link.id} key={link.id}>
                                        <div className="article" id='read'>
                                            <h1>{link.id}</h1>
                                            <h2>Category: {link.category}</h2>
                                            <p><strong>Status:</strong> Complete</p>
                                            <div className='buttons'>
                                                <button><a href={link.url}>Go to Article</a></button>
                                                <button className='delete' onClick={() => this.props.deleteLink(link.id)}>Delete</button>
                                            </div>
                                        </div>
                                </div>
            
                            )}   }
                        )}
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
)(Art);