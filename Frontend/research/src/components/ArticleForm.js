import React, { Component } from "react";
import { connect } from 'react-redux';
import { addLink } from '../Actions/Index'

export class ArticleForm extends Component {
    state = {
        link: {
            title: '',
            description: '',
            url: "",
            category: "",
            user_id: '',
            is_read: false,
        }
    };

    handleChange = e => {
        this.setState({
            link: { ...this.state.link, [e.target.name]: e.target.value }
        });
    };

    handleSubmit = () => {
        const cat = this.state.category
        console.log({...this.state.link, category: cat})
        this.props.addLink({ ...this.state.link, category: cat})
        this.setState({
            link: {
                title: '',
                description: '',
                url: '',
                category: '',
                username: '',
                user_id: localStorage.getItem('user_id'),
            }
        });
        this.props.history.push("/ArticleList");
    };

    cataWorld = event => {
        event.preventDefault();
        this.setState({ category: 'World' })
    }
    cataTech = event => {
        event.preventDefault();
        this.setState({ category: 'Technology' })
    }
    cataNational = event => {
        event.preventDefault();
        this.setState({ category: 'National' })
    }
    cataLocal = event => {
        event.preventDefault();
        this.setState({ category: 'Local' })
    }
    cataSports = event => {
        event.preventDefault();
        this.setState({ category: 'Sports' })
    }
    cataArt = event => {
        event.preventDefault();
        this.setState({ category: 'Art' })
    }
    cataPolitics = event => {
        event.preventDefault();
        this.setState({ category: 'Politics' })
    }
    cataReligion = event => {
        event.preventDefault();
        this.setState({ category: 'Religion' })
    }
    cataScience = event => {
        event.preventDefault();
        this.setState({ category: 'Science' })
    }

    render() {
        return (
            <div className='FormContainer'>
                <form onSubmit={this.handleSubmit} className='AddFormContainer'>

                    <h3 className='formDetails'>Title:</h3>
                    <input
                        name="title"
                        value={this.state.link.title}
                        onChange={this.handleChange}
                        placeholder="Title"
                        className='Input'
                    />

                    <h3 className='formDetails'>Desctiption:</h3>
                    <input
                        name="description"
                        value={this.state.link.description}
                        onChange={this.handleChange}
                        placeholder="Description"
                        className='Input'
                    />

                    <h3 className='formDetails'>URL of Article:</h3>
                    <input
                        name="url"
                        value={this.state.link.url || ''}
                        onChange={this.handleChange}
                        placeholder="Url"
                        className='Input'
                    />

                    <h3 className='formDetails'>Your Username:</h3>
                    <input
                        name='username'
                        value={this.state.link.username || ''}
                        placeholder='Username'
                        onChange={this.handleChange}
                        className='Input'
                    />

                    <h3 className='formDetails'>Select a Category:</h3>
                    <div className='form-buttons'>
                        <button onClick={this.cataWorld}>World</button>
                        <button onClick={this.cataTech}>Technology</button>
                        <button onClick={this.cataNational}>National</button>
                        <button onClick={this.cataLocal}>Local</button>
                        <button onClick={this.cataSports}>Sports</button>
                        <button onClick={this.cataArt}>Art</button>
                        <button onClick={this.cataPolitics}>Politics</button>
                        <button onClick={this.cataReligion}>Religion</button>
                        <button onClick={this.cataScience}>Science</button>
                    </div>

                    <br />
                    <button className='submit' onClick={this.handleSubmit}>Add Article</button>
                </form>
            </div>
        );
    }
}

export default connect(
    null,
    { addLink }
)(ArticleForm);