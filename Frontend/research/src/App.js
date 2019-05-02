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
import Science from './components/Categories/Science';
import Sports from './components/Categories/Sports';
import Art from './components/Categories/Art';
import Local from './components/Categories/Local';
import National from './components/Categories/National';
import Politics from './components/Categories/Politics';
import Religion from './components/Categories/Religion';
import Technology from './components/Categories/Technology';
import World from './components/Categories/World';
import Footer from './components/Footer';

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
          <NavLink to="/ArticleList">All</NavLink>
          <NavLink to='/Article-Art'>Art</NavLink>
          <NavLink to='/Article-National'>National</NavLink>
          <NavLink to='/Article-Local'>Local</NavLink>
          <NavLink to='/Article-Politics'>Politics</NavLink>
          <NavLink to='/Article-Religion'>Religion</NavLink>
          <NavLink to='/Article-Sports'>Sports</NavLink>
          <NavLink to='/Article-Technology'>Technology</NavLink>
          <NavLink to='/Article-World'>World</NavLink>
          <NavLink to='/Article-Science'>Science</NavLink>
          <NavLink to='/CompletedArticles'>Completed</NavLink>
          <NavLink to="/ArticleForm" className='addIt'>Add Article</NavLink>
          <NavLink to='/' className='signOut' onClick={this.logOut} >Log Out</NavLink>
        </div>
      </nav>
    )

    let loggedOut = (
      <nav className='LoggedOutHeader'>
        <h1>Modern Day Researcher</h1>
        <div>
          <NavLink className='LoggedOutButton' to='/'>Login</NavLink>
          <NavLink className='LoggedOutButton' to='/sign-up'>Signup</NavLink>
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
        <Route exact path="/Article-Science"
          render={() => (
            <Science
              links={this.state.links}
              deleteLink={this.deleteLink}
              updateLink={this.updateLink}
            />
          )}
        />
        <Route exact path="/Article-Art"
          render={() => (
            <Art
              links={this.state.links}
              deleteLink={this.deleteLink}
              updateLink={this.updateLink}
            />
          )}
        />
        <Route exact path="/Article-Local"
          render={() => (
            <Local
              links={this.state.links}
              deleteLink={this.deleteLink}
              updateLink={this.updateLink}
            />
          )}
        />
        <Route exact path="/Article-National"
          render={() => (
            <National
              links={this.state.links}
              deleteLink={this.deleteLink}
              updateLink={this.updateLink}
            />
          )}
        />
        <Route exact path="/Article-Politics"
          render={() => (
            <Politics
              links={this.state.links}
              deleteLink={this.deleteLink}
              updateLink={this.updateLink}
            />
          )}
        />
        <Route exact path="/Article-Religion"
          render={() => (
            <Religion
              links={this.state.links}
              deleteLink={this.deleteLink}
              updateLink={this.updateLink}
            />
          )}
        />
        <Route exact path="/Article-Sports"
          render={() => (
            <Sports
              links={this.state.links}
              deleteLink={this.deleteLink}
              updateLink={this.updateLink}
            />
          )}
        />
        <Route exact path="/Article-Technology"
          render={() => (
            <Technology
              links={this.state.links}
              deleteLink={this.deleteLink}
              updateLink={this.updateLink}
            />
          )}
        />
        <Route exact path="/Article-World"
          render={() => (
            <World
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
              key={this.state.links.id}
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
        <div className='bottomFooter'>
          {localStorage.getItem('token') ? (
            <Footer/>
          ) : (<p></p>)}
        </div>
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