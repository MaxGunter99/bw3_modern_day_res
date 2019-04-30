import axios from 'axios';

// Add new user 
export const SIGN_UP = 'SIGN_UP';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE'

export const signUp = userInfo => dispatch => {
    console.log(userInfo)
    dispatch({ type: SIGN_UP })
    return axios.post('https://rticle.herokuapp.com/api/auth/register', userInfo)
        .then(res => {
            dispatch({ type: SIGN_UP_SUCCESS, payload: res.data.token })
            localStorage.setItem('token', res.data.token);
            console.log(res);
        })
        .catch(err => {
            dispatch({ type: SIGN_UP_FAILURE, payload: err.message}, alert('Error'))
        })
}


// Sign In 
export const SIGN_IN = 'SIGN_IN';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_FAILURE = 'SIGN_IN_FAILURE';

export const login = userInfo => dispatch => {
    dispatch({ type: SIGN_IN })
    return axios.post('https://rticle.herokuapp.com/api/auth/login', userInfo)
        .then(res => {
            dispatch({ type: SIGN_IN_SUCCESS, payload: res.data.token })
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('user_id', res.data.user_id);
        })
        .catch(err => {
            dispatch({ type: SIGN_IN_FAILURE, payload: err.message }, alert('Error'))
        })
}

export const SIGNED_IN = "SIGNED_IN";
export const SIGNED_OUT = "SIGNED_OUT";

export const checkSignIn = () => {
    if (localStorage.getItem('token')) {
        return { type: SIGNED_IN }
    }
    return { type: SIGNED_OUT }
}

// Request shared link page
export const GET_LINKS = "GET_LINKS";
export const GET_LINKS_SUCCESS = "GET_LINKS_SUCCESS";
export const GET_LINKS_FAILURE = "GET_LINKS_FAILURE";

export const getLinks = id => dispatch => {
    dispatch({ type: GET_LINKS })
    axios.get(`https://rticle.herokuapp.com/api/${id}`)
        .then(res => {
            console.log(res);
            dispatch({ type: GET_LINKS_SUCCESS, payload: res.data.data })
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: GET_LINKS_FAILURE, payload: err.message })
        })
}

// // Request a specific category
export const GET_LINK = "GET_LINK";
export const GET_LINK_SUCCESS = "GET_LINK_SUCCESS";
export const GET_LINK_FAILURE = "GET_LINK_FAILURE";

// () takes in /category/${id} ???

export const getCategory = () => dispatch => {
    dispatch({ type: GET_LINK })
    axios.get('')
        .then(res => {
            console.log(res);
            dispatch({ type: GET_LINK_SUCCESS, payload: res.data.data })
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: GET_LINK_FAILURE, payload: err.message })
        })
}


// Add a new link
export const ADD_LINK = "ADD_LINK";
export const ADD_LINK_SUCCESS = "ADD_LINK_SUCCESS";
export const ADD_LINK_FAILURE = "ADD_LINK_FAILURE";

export const addLink = link => dispatch => {
    dispatch({ type: ADD_LINK })
    return axios.post('https://rticle.herokuapp.com/api/user/articles', link)
        .then(res => {
            console.log(res);
            dispatch({ type: ADD_LINK_SUCCESS, payload: res.data.data })
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: ADD_LINK_FAILURE, payload: err.message })
        })
}

// Delete a link
export const DELETE_LINK = "DELETE_LINK";
export const DELETE_LINK_SUCCESS = "DELETE_LINK_SUCCESS";
export const DELETE_LINK_FAILURE = "DELETE_LINK_FAILURE";

export const deleteLink = () => dispatch => {
    dispatch({ type: DELETE_LINK })
    axios.delete('')
        .then(res => {
            console.log(res);
            dispatch({ type: DELETE_LINK_SUCCESS, payload: res.data.data })
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: DELETE_LINK_FAILURE, payload: err.message })
        })
}

//LOGOUT
export const LOGOUT = 'LOGOUT'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'

export const logout = () => dispatch => {
    dispatch({ type: LOGOUT })
    localStorage.removeItem('token')
    localStorage.removeItem('data')
    dispatch({ type: LOGOUT_SUCCESS })
    window.location.reload()
}