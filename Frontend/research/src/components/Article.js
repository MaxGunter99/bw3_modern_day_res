import React from 'react';
import { updateLink } from '../Actions/Index';
import { connect } from 'react-redux'
// import { ArticleForm } from './ArticleForm';

export class Article extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false,
            links: {}
        }
    }

    render() {
        return (
            <div className='container'>
                <div className="article">
                    <h2>{this.props.links.category}</h2>
                    <h4>{this.props.links.url}</h4>
                    <p>{this.props.links.id}</p>

                </div>
                <button onClick={( event , id = links.id ) => this.props.links.deleteLink( event , id )} >Delete</button>
                {/* {this.state.edit && <ArticleForm links={this.props.links} submit={this.props.updateLink} />}
                <button
                    className='edit'
                    onClick={this.toggleEdit}
                >Edit Article</button> */}
            </div>  
        )
    }
}

const mapStateToProps = state => {
    return {
        edit: state.editing,
        links: state.links
    }
}

export default connect(
    mapStateToProps,
    { updateLink }
) (Article);