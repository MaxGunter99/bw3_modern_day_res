import React, { Component } from "react";
import { connect } from "react-redux";
import { getLinks, deleteLink, updateLink } from "../Actions/Index";
// import { Article } from "./Article";

class ArticleList extends Component {
    state = {
        link: [ ],
        // edit: false
    };

    // toggleEdit = () => {
    //     this.setState( originalState => ({
    //         edit: !originalState.edit
    //     }))
    // }

    render() {
        // console.log(this.props.links)
        return (
            <>
                <div className="container">
                    <div className="ArticleContainer">
                        {this.props.links.map(link => (
                            <div className='ArticleWrapper' id={link.id} key={link.id}>
                                <div className="article">
                                    <h2>{link.category}</h2>
                                    <h4>{link.url}</h4>
                                    <p>{link.id}</p>
                                    <button onClick={ () => this.props.deleteLink( link.id )}>Delete</button>
                                </div>
                            </div>
                            // <Article link={link}/>
                        ))}
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = state => ({
    links: state.links,
    // edit: state.editing
});

export default connect(
    mapStateToProps,
    { getLinks, deleteLink, updateLink }
)(ArticleList);



// function ArticleList(props) {
//     function routeToItem(ev, link) {
//         ev.preventDefault();
//         props.history.push(`/ArticleList/${link.id}`);
//     }

//     componentDidMount = () => {
//         console.log("COMPONENT MOUNTED")
//         axios.get(`https://rticle.herokuapp.com/api/user/:${localStorage.getItem('user_id')}`).then(res => {
//           this.setState({ links: res.data })
//         })
//     }

//     return (
//         <div className="ArticleList">
//             {props.links.map(link=> (
//                 <div
//                     onClick={event => routeToItem(event, link)}
//                     className="item-card"
//                     key={link.id}
//                 >
//                     <p>{link.url}</p>
//                     <p>{link.category}</p>
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default ArticleList;