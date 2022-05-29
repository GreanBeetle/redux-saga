import {
    GET_USERS_REQUEST,
    GET_USERS_SUCCESS
} from '../actions/users'

const initialState = { items: [] }

export default function users(state = initialState, action) {
    switch(action.type) {
        case GET_USERS_REQUEST: 
            console.log('REDUCER: fetching users')
            return state
        case GET_USERS_SUCCESS:
            return { items: action.payload.items }
        default: 
            return state
    }
}