import React from 'react';
import ArticleList from "./components/ArticleList";
import ArticleForm from "./components/ArticleForm";
import {
  Route,
  NavLink,
} from "react-router-dom";
import './App.css'
import Login from "./components/Login";
import Signup from "./components/Signup";
import { connect } from "react-redux";
import { getLinks, deleteLink } from './Actions/Index';
import CompletedArticles from './components/CompletedArticles';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      links: []
    };
  }

  gettingLinks() { this.props.getLinks(localStorage.getItem('user_id')); }

  componentDidMount() {
    this.gettingLinks()
  }

  deleteLink = (index) => {
    this.props.deleteLink(index)
    this.gettingLinks();
    this.props.history.push("/ArticleList");
  };

  updateLink = (e, index, is_read) => {
    e.preventDefault();
    this.props.updateLink(index, is_read)
    this.gettingLinks();
  };

  logOut = () => {
    localStorage.removeItem("token");
    this.props.checkSignIn();
    this.props.history.push("/sign-in");
  };

  render() {
    let loggedIn = (
      <nav className='header'>
        <h1>Modern Day Researcher</h1>
        <div>
          <NavLink to='/CompletedArticles'>Completed</NavLink>
          <NavLink to="/ArticleList">Articles</NavLink>
          <NavLink to="/ArticleForm" className='addIt'>Add Article</NavLink>
          <NavLink to='/sign-in' className='signOut' onClick={this.logOut} >Log Out</NavLink>
          {/* <Route  */}
        </div>
      </nav>
    )

    let loggedOut = (
      <nav className='header'>
        <h1>Modern Day Researcher</h1>
        <div>
          <NavLink to='/sign-in'>Login</NavLink>
          <NavLink to='/sign-up'>Signup</NavLink>
        </div>
      </nav>
    )

    return (
      <div className="App">
        {localStorage.getItem('token') ? (
          <div className='navBar'>{loggedIn}</div>
        ) : (
            <div>{loggedOut}</div>
          )}

        <Route path='/sign-in' component={Login} />
        <Route path='/sign-up' component={Signup} />

        <Route exact path="/ArticleList"
          render={() => (
            <ArticleList
              links={this.state.links}
              deleteLink={this.deleteLink}
              updateLink={this.updateLink}
            />
          )}
        />
        <Route exact path="/CompletedArticles"
          render={() => (
            <CompletedArticles
              links={this.state.links}
              deleteLink={this.deleteLink}
            />
          )}
        />
        <Route path="/ArticleForm"
          render={props => (
            <ArticleForm
              {...props}
              updateLink={this.updateLink}
              addLink={this.addLink}
              currentLink={this.state.currentLink}
            />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    links: state.links
  }
}

export default connect(
  mapStateToProps,
  { getLinks, deleteLink }
)(App);