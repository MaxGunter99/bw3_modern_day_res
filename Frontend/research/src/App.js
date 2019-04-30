import axios from "axios";
import React from 'react';
import Home from "./components/Home";
import ArticleList from "./components/ArticleList";
import Article from "./components/Article";
import ArticleForm from "./components/ArticleForm";
import {
  BrowserRouter as Router,
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
      articles: [],
      currentArticle: null
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3333/items")
      .then(res => {
        console.log(res);
        this.setState({
          articles: res.data
        });
      })
      .catch(function (err) {
        console.log(err);
      });

    console.log("after the get request");
  }

  addArticle = article => {
    axios
      .post("http://localhost:3333/items", article)
      .then(res => this.setState({ articles: res.data }))
      .catch(err => console.log(err));
  };

  deleteArticle = id => {
    axios
      .delete(`http://localhost:3333/items/${id}`)
      .then(res => {
        this.setState({ articles: res.data });
        this.props.history.push("/ArticleList");
      })
      .catch(err => console.log(err));
  };

  updateArticle = article => {
    axios
      .put(`http://localhost:3333/items/${article.id}`, article)
      .then(res => {
        this.setState({ articles: res.data, currentArticle: null });
        this.props.history.push("/ArticleList");
      })
      .catch(err => console.log(err));
  };

  setupUpdate = article => {
    this.setState({ currentArticle: article });

    this.props.history.push("/ArticleForm");
  };

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <nav className='header'>
          <h1>Modern Day Researcher</h1>
          <div>
            <NavLink to='/sign-in'>Login</NavLink>
            <NavLink to='/sign-up'>Signup</NavLink>
            <NavLink to="/ArticleList">Articles</NavLink>
            <NavLink to="/ArticleForm">Add Article</NavLink>
          </div>
        </nav>

        <Route path='/sign-in' component={Login} />
        <Route path='/sign-up' component={Signup} />
        <Route exact path="/" component={Home} />

        <Route
          exact
          path="/ArticleList"
          render={props => (
            <ArticleList
              {...props}
              articles={this.state.articles}
            />
          )}
        />
        <Route
          path="/ArticleList/:id"
          render={props => (
            <Article
              {...props}
              articles={this.state.articles}
              setupUpdate={this.setupUpdate}
              deleteArticle={this.deleteArticle}
            />
          )}
        />
        <Route
          path="/ArticleForm"
          render={props => (
            <ArticleForm
              {...props}
              updateArticle={this.updateArticle}
              addArticle={this.addArticle}
              currentArticle={this.state.currentArticle}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
