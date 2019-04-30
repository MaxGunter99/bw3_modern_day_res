import React, { Component } from "react";
import { connect } from "react-redux";
import { signUp } from "../Actions/Index";
import '../App.css';


class Signup extends Component {
    state = {
        userInfo: {
            username: "",
            password: ""
        }
    };

    changeHandler = event => {
        event.preventDefault();
        this.setState({
            userInfo: {
                ...this.state.userInfo,
                [event.target.name]: event.target.value
            }
        });
    };

    submitDataHandler = event => {
        event.preventDefault();
        this.props.signUp(this.state.userInfo).then(() => this.props.history.push('/'))
    };

    render() {
        return (
            <div className="form-wrap">
                <div className="sign-header">
                    <h3 className='cat-head'>Sign Up</h3>
                </div>
                <form onSubmit={this.submitDataHandler}>
                    <label>Username</label>
                    <input
                        id="username"
                        type="text"
                        name="username"
                        onChange={this.changeHandler}
                        value={this.state.userInfo.username}
                        className='in user'
                        placeholder="Username"
                    />
                    <label>Password</label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        value={this.state.userInfo.password}
                        onChange={this.changeHandler}
                        className='in pass'
                        placeholder="Password"
                    />
                    <button onSubmit={this.submitDataHandler} className='actButton'>Sign Up! </button>
                </form>
                <div />
            </div>
        )
    }
}

export default connect(
    null,
    { signUp }
)(Signup);