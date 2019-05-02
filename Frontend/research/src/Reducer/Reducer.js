import {
    SIGN_UP,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAILURE,
    SIGN_IN,
    SIGN_IN_SUCCESS,
    SIGN_IN_FAILURE,
    SIGNED_IN,
    SIGNED_OUT,
    GET_LINKS,
    GET_LINKS_SUCCESS,
    GET_LINKS_FAILURE,
    GET_LINK,
    GET_LINK_SUCCESS,
    GET_LINK_FAILURE,
    ADD_LINK,
    ADD_LINK_SUCCESS,
    ADD_LINK_FAILURE,
    DELETE_LINK,
    DELETE_LINK_SUCCESS,
    DELETE_LINK_FAILURE,
    UPDATE_LINK,
    UPDATE_LINK_PASS,
    UPDATE_LINK_FAIL
} from '../Actions/Index';

const initialState = {
    links: [],
    signingUp: false,
    signedUp: false,
    signingIn: false,
    signedIn: false,
    currentUser: null,
    fetchingLinks: false,
    fetchingLink: false,
    addingLink: false,
    deletingLink: false,
    updatingLink: false,
    error: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_UP:
            return {
                ...state,
                signingUp: true,
                signedIn: false
            }
        case SIGN_UP_SUCCESS:
            return {
                ...state,
                signingUp: true,
                signedIn: true
            }
        case SIGN_UP_FAILURE:
            return {
                ...state,
                signingUp: false,
                signedUp: false,
                error: action.payload
            }
        case SIGN_IN:
            return {
                ...state,
                signingIn: true
            }
        case SIGN_IN_SUCCESS:
            return {
                ...state,
                signingIn: false,
                signedIn: true
            }
        case SIGN_IN_FAILURE:
            return {
                ...state,
                signingIn: false,
                signedIn: false,
                error: action.payload
            }
        case SIGNED_IN:
            return {
                ...state,
                signedIn: true
            }
        case SIGNED_OUT:
            return {
                ...state,
                signedIn: false
            }
        case GET_LINKS:
            return {
                ...state,
                fetchingLinks: true
            }
        case GET_LINKS_SUCCESS:
            return {
                ...state,
                links: action.payload,
                fetchingLinks: false
            }
        case GET_LINKS_FAILURE:
            return {
                ...state,
                fetchingLinks: false,
                error: action.payload
            }
        case GET_LINK:
            return {
                ...state,
                fetchingLink: true
            }
        case GET_LINK_SUCCESS:
            return {
                ...state,
                links: action.payload,
                fetchingLink: false
            }
        case GET_LINK_FAILURE:
            return {
                ...state,
                fetchingLink: false,
                error: action.payload
            }
        case ADD_LINK:
            return {
                ...state,
                link: action.payload,
                addingLink: true,
                signedIn: true
            }
        case ADD_LINK_SUCCESS:
            console.log(action.payload, 'payload')
            return {
                ...state,
                addingLink: false,
                links: [...state.links, action.payload]
            }
        case ADD_LINK_FAILURE:
            return {
                ...state,
                addingLink: false,
                error: action.payload
            }
        case DELETE_LINK:
            return {
                ...state,
                deletingLink: true,
                // links: state.links.filter( (link) => link.id !== action.payload.id )
            }
        case DELETE_LINK_SUCCESS:
            return {
                ...state,
                deletingLink: false,
                links: state.links.filter((link) => link.id !== action.payload.id)
            }
        case DELETE_LINK_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        case UPDATE_LINK:
            return {
                ...state,
                updatingLink: true,
            }
        case UPDATE_LINK_PASS:
            return {
                ...state,
                updatingLink: false,
                // links: state.links.filter((link) => link.id !== action.payload.id)
            }
        case UPDATE_LINK_FAIL:
            return {
                ...state,
                error: action.payload
            }
        default:
            return {
                ...state
            }
    }
}

export default reducer;