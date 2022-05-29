import {
    GET_USERS_REQUEST,
    GET_USERS_SUCCESS
} from '../actions/users'

const initialState = { items: [] }

export default function users(state = initialState, action) {
    switch(action.type) {
        case GET_USERS_SUCCESS:
            console.log('GET_USER_SUCCESS_action.payload', action.payload) // REMOVE
            return { items: action.payload.items }
        default: 
            return state
    }
}