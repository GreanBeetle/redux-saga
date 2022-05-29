import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUsersRequest } from '../actions/users'

function* testing() {
    while(true) {
        yield 1
        yield 2
        yield 3
    }
}

const App = () => {
    const iterator = testing()
    console.log('iterator.next()', iterator.next())
    console.log('iterator.next()', iterator.next())
    console.log('iterator.next()', iterator.next())
    console.log('iterator.next()', iterator.next())


    const globalState = useSelector( state => state)
    const dispatch = useDispatch()
    console.log('globalState?', globalState) // REMOVE

    useEffect( () => {
        dispatch(getUsersRequest())
    }, [])

    return <div>test app</div>
} 

export default App;
