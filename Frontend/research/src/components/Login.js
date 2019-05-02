import React, { Component } from 'react';
import { connect } from 'react-redux';

import { login } from '../Actions/Index';
import '../App.css';


class Login extends Component {
    state = {
        userInfo: {
            username: '',
            password: ''
        }
    }


    changeHandler = event => {
        event.preventDefault();
        this.setState({
            userInfo: {
                ...this.state.userInfo,
                [event.target.name]: event.target.value
            }
        });
    };

    submitDataHandler = e => {
        e.preventDefault();
        this.props.login(this.state.userInfo).then(() => this.props.history.push("/CompletedArticles"));
        setTimeout(function(){window.location.reload(e.preventDefault())} , 200);
    };

    render() {
        return (
            <div className="form-wrap">
                <form className='LogAndSign' onSubmit={this.submitDataHandler}>
                    <h3 className='cat-head'>Log In</h3>
                    <label>Username:</label>
                    <input
                        id="username"
                        type="text"
                        name="username"
                        value={this.state.userInfo.username}
                        className='in user'
                        placeholder="Username"
                        onChange={this.changeHandler}
                    />
                    <label htmlFor="password">Password:</label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        value={this.state.userInfo.password}
                        className='in pass'
                        placeholder="Password"
                        onChange={this.changeHandler}
                    />
                    <button type='submit' className='actButton' >Submit</button>
                </form>
                <div />
            </div>
        )
    }
}
export default connect(
    null,
    { login }
)(Login)