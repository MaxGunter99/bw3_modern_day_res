import React, {Component} from "react";
import { connect } from 'react-redux';
import { addLink } from '../Actions/Index'

    export class ArticleForm extends Component {
        state = {
            link: {
                url: "",
                category: "",
                user_id: '',
                is_read: false
            }
        };

        // handleChange = e => {
        //     this.setState({
        //         [e.target.name]: e.target.value
        //     });
        // };

        handleChange = e => {
            this.setState({
                link: {...this.state.link, [e.target.name]: e.target.value}
            });
        };

        handleSubmit = () => {
            const cat = this.state.category
            this.props.addLink({...this.state.link, category: cat})
            this.setState({
                link: {
                    url: '',
                    category: '',
                    username: '',
                    user_id: localStorage.getItem('user_id')
                }
            });
            this.props.history.push("/ArticleList");
        };

    cataWorld = event => {
        event.preventDefault();
        this.setState({ category: 'world' })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} className='AddFormContainer'>
                    <input
                        name="url"
                        value={this.state.link.url || ''}
                        onChange={this.handleChange}
                        placeholder="Url"
                        className='Input'
                    />
                    <input
                        name='username'
                        value={this.state.link.username || ''}
                        placeholder='Add a User to share with'
                        onChange={this.handleChange}
                        className='Input'
                    />
                </form>

                <button onClick={this.cataWorld}>World</button>
                <button onClick={this.handleSubmit}>Add Article</button>

            </div>
        );
    }
}

export default connect(
    null,
    { addLink }
)(ArticleForm);


// import React from "react";

// export default class ArticleForm extends React.Component {
//     state = {
//         name: "",
//         price: "",
//         imageUrl: "",
//         description: "",
//         shipping: ""
//     };

//     componentDidMount() {
//         if (this.props.currentArticle) {
//             this.setState({
//                 name: this.props.currentArticle.name,
//                 price: this.props.currentArticle.price,
//                 imageUrl: this.props.currentArticle.imageUrl,
//                 description: this.props.currentArticle.description,
//                 shipping: this.props.currentArticle.shipping
//             });

//         }

//     }

//     handleChange = e => {
//         this.setState({
//             [e.target.name]: e.target.value
//         });
//     };

//     handleSubmit = e => {
//         e.preventDefault();

//         if (!this.props.currentArticle) {

//             this.props.addArticle({
//                 ...this.state
//             });

//         }

//         else {

//             this.props.updateArticle({
//                 ...this.state,
//                 id: this.props.currentArticle.id
//             });

//         }

//         this.setState({
//             name: "",
//             price: "",
//             imageUrl: "",
//             description: "",
//             shipping: ""
//         });

//         this.props.history.push("/ArticleList");
//     };

//     render() {
//         return (
//             <form onSubmit={this.handleSubmit} className='AddFormContainer'>
//                 <input
//                     type="text"
//                     name="name"
//                     value={this.state.name}
//                     onChange={this.handleChange}
//                     placeholder="name"
//                 />
//                 <input
//                     type="text"
//                     name="price"
//                     value={this.state.price}
//                     onChange={this.handleChange}
//                     placeholder="price"
//                 />
//                 <input
//                     type="text"
//                     name="imageUrl"
//                     value={this.state.imageUrl}
//                     onChange={this.handleChange}
//                     placeholder="imageUrl"
//                 />
//                 <input
//                     type="text"
//                     name="description"
//                     value={this.state.description}
//                     onChange={this.handleChange}
//                     placeholder="description"
//                 />
//                 <input
//                     type="text"
//                     name="shipping"
//                     value={this.state.shipping}
//                     onChange={this.handleChange}
//                     placeholder="shipping"
//                 />

//                 <button>Add Article</button>
//             </form>
//         );
//     }
// }