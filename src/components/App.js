import React from 'react'

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
    return <div>test app</div>
} 

export default App;
