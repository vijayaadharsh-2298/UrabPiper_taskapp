import { createStore, combineReducers } from 'redux';

import PersonsReducer from './persons.reducer';

const globalStore = () => {
    const store = createStore(combineReducers({
        persons: PersonsReducer
    }));
    // store.subscribe(() => {
    //     console.log(store.getState())
    // })
    return store;
}

export default globalStore;