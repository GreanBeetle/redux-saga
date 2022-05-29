# Redux Saga

Simple project focused on solely on learning Redux Saga

### Create Redux Store

See src/index

TO-DO: add link to src/index?

### Generator Functions 

See src/components/app

### Sagas, Creating

See src/sagas/users

As a rule of thumb, the file structure and file naming within the sagas folder should mirror the actions folder. So, if actions contains the files foo.js, bar,.js, baz.js, so too should the sagas folder have foo.js, bar.js, and baz.js. 

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


