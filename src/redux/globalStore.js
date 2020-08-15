import { createStore, combineReducers } from 'redux';

import PersonsReducer from './persons.reducer';
import FilterReducer from './filter.reducer';

const globalStore = () => {
    const store = createStore(combineReducers({
        persons: PersonsReducer,
        filter: FilterReducer
    }));
    // store.subscribe(() => {
    //     console.log(store.getState())
    // })
    return store;
}

export default globalStore;