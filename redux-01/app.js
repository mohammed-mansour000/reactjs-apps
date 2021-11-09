var redux = require('redux');

function counter(state = 0, action){
    switch(action.type){
        case 'INCREMENT':
            state = state + 1;
            break;
        case 'DECREMENT':
            state = state - 1;
            break;
    }
    return state;
}

let store = redux.createStore(counter);

store.subscribe(() => { console.log(store.getState()) });
store.subscribe(() => { console.log(store.getState()) });
store.subscribe(() => { console.log(store.getState()) });

store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'DECREMENT'});


setInterval(()=> {
    store.dispatch({type: 'DECREMENT'});
}, 700)
setInterval(()=> {
    store.dispatch({type: 'INCREMENT'});
}, 800)