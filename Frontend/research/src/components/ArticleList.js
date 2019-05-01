import React, { Component } from "react";
import { connect } from "react-redux";
import { getLinks, deleteLink } from "../Actions/Index";
import Article from "./Article";

class ArticleList extends Component {
    state = {
        link: this.props.link
    };
    

    componentDidMount() {
        this.props.getLinks(localStorage.getItem('user_id'));
    }

    render() {
        return (
            <>
                <div className="container">
                    <div className="main-container">
                        {this.props.links.map(link => (
                            <Article link={link} key={link.id} deleteLink={this.deleteLink}/>
                        ))}
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
    { getLinks, deleteLink }
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