import axios from 'axios'

export const getUsersAPIrequest = () => {
    return axios.get('/users', {
        params: { limit: 1000 } 
    })
}