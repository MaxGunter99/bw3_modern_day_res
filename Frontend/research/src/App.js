import axios from "axios";
import React from 'react';
import ArticleList from "./components/ArticleList";
import Article from "./components/Article";
import ArticleForm from "./components/ArticleForm";
import {
  Route,
  NavLink,
} from "react-router-dom";
import './App.css'
import Login from "./components/Login";
import Signup from "./components/Signup";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      links: [],
      currentLink: null,
    };
  }

  componentDidMount() {
    axios
      .get('https://rticle.herokuapp.com/api/user/articles', { 
        headers: { Authorization: localStorage.getItem('token') } 
      })
      .then(res => {
        console.log(res);
        this.setState({
          links: res.data
        });
      })
      .catch(function (err) {
        console.log(err);
      });

    console.log("after the get request");
  }

  // addArticle = link => {
  //   axios
  //     .post("https://rticle.herokuapp.com/api/user/articles", link, { headers: { Authorization: localStorage.getItem('token') }})
  //     .then(res => this.setState({ articles: res.data }))
  //     .catch(err => console.log(err));
  // };

  // deleteArticle = id => {
  //   axios
  //     .delete(`https://rticle.herokuapp.com/api/${id}`)
  //     .then(res => {
  //       this.setState({ articles: res.data });
  //       this.props.history.push("/ArticleList");
  //     })
  //     .catch(err => console.log(err));
  // };

  // updateArticle = article => {
  //   axios
  //     .put(`https://rticle.herokuapp.com/api/${article.id}`, article)
  //     .then(res => {
  //       this.setState({ articles: res.data, currentArticle: null });
  //       this.props.history.push("/ArticleList");
  //     })
  //     .catch(err => console.log(err));
  // };

  setupUpdate = link => {
    this.setState({ currentLink: link });

    this.props.history.push("/ArticleForm");
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
          <NavLink to="/ArticleList">Articles</NavLink>
          <NavLink to="/ArticleForm">Add Article</NavLink>
          <NavLink to='/sign-in' className='sign' onClick={this.logOut} >Log Out</NavLink>
        </div>
      </nav>
    )

    let loggedOut = (
      <nav className='header'>
        <h1>Modern Day Researcher</h1>
        <div>
          <NavLink to='/sign-in'>Login</NavLink>
          <NavLink to='/sign-up'>Signup</NavLink>
          <NavLink to="/ArticleList">Articles</NavLink>
          <NavLink to="/ArticleForm">Add Article</NavLink>
        </div>
      </nav>
    )

    return (
      <div className="App">
        {this.props.token ? (
          <div className='navBar'>{loggedIn}</div>
        ) : (
            <div>{loggedOut}</div>
          )}

        <Route path='/sign-in' component={Login} />
        <Route path='/sign-up' component={Signup} />

        <Route
          exact
          path="/ArticleList"
          render={props => (
            <ArticleList
              {...props}
              links={this.state.links}
            />
          )}
        />
        <Route
          path="/ArticleList/:id"
          render={props => (
            <Article
              {...props}
              links={this.state.links}
              setupUpdate={this.setupUpdate}
              deleteLink={this.deleteLink}
            />
          )}
        />
        <Route
          path="/ArticleForm"
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

export default App;
