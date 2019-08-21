import axios from 'axios';

// SIGN UP
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
            dispatch({ type: SIGN_UP_FAILURE, payload: err.message }, alert('Sign up error, please try again.'))
        })
}


// SIGN IN
export const SIGN_IN = 'SIGN_IN';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_FAILURE = 'SIGN_IN_FAILURE';

export const login = userInfo => dispatch => {
    dispatch({ type: SIGN_IN })
    return axios.post('https://rticle.herokuapp.com/api/auth/login', userInfo)
        .then(res => {
            dispatch({ type: SIGN_IN_SUCCESS, payload: res.data.token })
            localStorage.setItem('token', res.data.token);
            // localStorage.setItem('user_id', res.data.user_id);
        })
        .catch(err => {
            dispatch({ type: SIGN_IN_FAILURE, payload: err.message }, alert('Login error, please try again.'))
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
    axios.get(`https://rticle.herokuapp.com/api/user/${id}`, { headers: { Authorization: localStorage.getItem('token') } })
        .then(res => {
            console.log(res);
            dispatch({ type: GET_LINKS_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: GET_LINKS_FAILURE, payload: err.message })
            localStorage.removeItem( 'token' );

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
            setTimeout(function(){window.location.reload();},300);
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: GET_LINK_FAILURE, payload: err.message })
        })
}


// ADD LINK
export const ADD_LINK = "ADD_LINK";
export const ADD_LINK_SUCCESS = "ADD_LINK_SUCCESS";
export const ADD_LINK_FAILURE = "ADD_LINK_FAILURE";

export const addLink = link => dispatch => {
    console.log(link)
    dispatch({ type: ADD_LINK })
    return axios.post('https://rticle.herokuapp.com/api/user/articles', link, { headers: { Authorization: localStorage.getItem('token') } })
        .then(res => {
            console.log(res);
            dispatch({ type: ADD_LINK_SUCCESS, payload: {...res.data, title: link.title, description: link.description} })
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: ADD_LINK_FAILURE, payload: err.message })
        })
}

// DELETE LINK
export const DELETE_LINK = "DELETE_LINK";
export const DELETE_LINK_SUCCESS = "DELETE_LINK_SUCCESS";
export const DELETE_LINK_FAILURE = "DELETE_LINK_FAILURE";

export const deleteLink = id => dispatch => {
    dispatch({ type: DELETE_LINK })

    return axios
        .delete(`https://rticle.herokuapp.com/api/user/${id}/articles`, { headers: { Authorization: localStorage.getItem('token') } })
        .then(res => {
            console.log(res);
            dispatch({ type: DELETE_LINK_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: DELETE_LINK_FAILURE, payload: err.message })
        })
}

//UPDATE LINK AS READ
export const UPDATE_LINK = "UPDATE_LINK"
export const UPDATE_LINK_PASS = "UPDATE_LINK_PASS"
export const UPDATE_LINK_FAIL = "UPDATE_LINK_FAIL"

export const updateLink = (id, is_read) => dispatch => {
    dispatch({ type: UPDATE_LINK });

    axios
        .post( `https://rticle.herokuapp.com/api/user/${id}/read`, is_read, { headers: { Authorization: localStorage.getItem('token') } } )
        .then(response => {
            dispatch({ type: UPDATE_LINK_PASS, payload: response.data });
        })
        .catch(error => {
            dispatch({ type: UPDATE_LINK_FAIL, payload: error });
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
}