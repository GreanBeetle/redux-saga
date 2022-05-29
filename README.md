# Redux Saga

Simple project focused on solely on learning Redux Saga

### Create, Connect to Redux Store

See src/index to store

See src/components/app for connecting to the store

Note, I opted to use function components and hooks instead of class components and lifecycle methods (the tutorial uses class components), we do not gain access to global redux state via connect(), mapStateToProps, mapDispatch, etc. useSelector and useDispatch are the tools of choice instead.

### Generator Functions 

See src/components/app

### Sagas, Creating and Connecting to Redux

See src/sagas/users for Creating

As a rule of thumb, the file structure and file naming within the sagas folder should mirror the actions folder. So, if actions contains the files foo.js, bar,.js, baz.js, so too should the sagas folder have foo.js, bar.js, and baz.js.

See src/index for Connecting the Sagas to Redux

### Sagas, _IMPORTANT_ Note About Reducers 

The tutorial doesn't explicitly talk about this, but we don't have a reducer switch case handling the GET_USERS_REQUEST action. Instead, we use 

`yield takeEvery(GET_USERS_REQUEST, getUsers)` 

Note that the second argument, `getUsers`, is a function that actually makes the API call and handles the asynchronous middle part (this is the middle in middleware) of this flow. Not until this flow succeeds do we actually jump back into a reducer and update state with the GET_USER_SUCCESS_ACTION. 


### Sagas, "takeEvery"

In this example app, takeEvery is used in a "watcher" function. A watcher function waits and watches for dispatched actions. Using the takeEvery keyword within a watcher function means that the function (for example, watchGetUsersRequest) will literally take every dispatched FOO_ACTION and do something with it. 

Use it like so

```javascript
// sagas/foobar.js
import { takeEvery } from 'redux-saga/effects'
import { FOO_BAR_REQUEST } from './actions'

function* getFoobar() {
    // for the sake of demonstration, we're simply going to return a value here 
    yield 'foobar'
}

function* watchGetFoobarRequest() {
    yield takeEvery(FOO_BAR_REQUEST, getFoobar)
}
```

---

### Sagas, "call", "fork", and "all"

_call_ 

See src/sagas/users

From Redux Saga's docs: "Just as in Redux you use action creators to create a plain object describing the action that will get executed by the Store, call creates a plain object describing the function call. The redux-saga middleware takes care of executing the function call and resuming the generator with the resolved response."

So TO-DO add an example and a better description here. 

_fork_

See src/sagas/users

I still don't fully understand this. Essentially it spawns a child process that can run in paralell to other processes. 

_all_

See src/sagas/index

This is kind of like [Promise.all()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all), which accepts an iterable (i.e. array) of promises and returns only one promise that _only resolves when all of the input promises resolve_. It (Promise.all()) resolves with an array of _returned values from original inputs_. 

In the context of Redux Saga, `yield all([ ...FooSagas, ...BarSagas, ...EtcSagas ])`, returns an array of sagas that are then run in paralell. TO-DO FIX THIS EXPLANATION IT'S WEAK AND DOESN'T EVEN MAKE SENSE TO ME. 


### Sagas, "put"

See src/sagas/user 

Essentially, put allows you to dispatch an action from within a saga/generator function. 


