import React, { Component } from "react";
import { connect } from "react-redux";
import { getLinks } from "../Actions/Index";
import Article from "./Article";

class ArticleList extends Component {
    state = {
        links: this.props.links
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
                            <Article link={link} key={link.id}/>
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
    { getLinks }
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