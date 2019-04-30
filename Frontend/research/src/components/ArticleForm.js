import React from "react";
import axios from "axios";

export default class ArticleForm extends React.Component {
    state = {
        name: "",
        price: "",
        imageUrl: "",
        description: "",
        shipping: ""
    };

    componentDidMount() {
        if (this.props.currentArticle) {
            this.setState({
                name: this.props.currentArticle.name,
                price: this.props.currentArticle.price,
                imageUrl: this.props.currentArticle.imageUrl,
                description: this.props.currentArticle.description,
                shipping: this.props.currentArticle.shipping
            });

        }

    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();

        if (!this.props.currentArticle) {

            this.props.addArticle({
                ...this.state
            });

        }

        else {

            this.props.updateArticle({
                ...this.state,
                id: this.props.currentArticle.id
            });

        }

        this.setState({
            name: "",
            price: "",
            imageUrl: "",
            description: "",
            shipping: ""
        });

        this.props.history.push("/ArticleList");
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    placeholder="name"
                />
                <input
                    type="text"
                    name="price"
                    value={this.state.price}
                    onChange={this.handleChange}
                    placeholder="price"
                />
                <input
                    type="text"
                    name="imageUrl"
                    value={this.state.imageUrl}
                    onChange={this.handleChange}
                    placeholder="imageUrl"
                />
                <input
                    type="text"
                    name="description"
                    value={this.state.description}
                    onChange={this.handleChange}
                    placeholder="description"
                />
                <input
                    type="text"
                    name="shipping"
                    value={this.state.shipping}
                    onChange={this.handleChange}
                    placeholder="shipping"
                />

                <button>Add Article</button>
            </form>
        );
    }
}