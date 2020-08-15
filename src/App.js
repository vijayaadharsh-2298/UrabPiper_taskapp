import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import { Provider } from 'react-redux'
import axios from 'axios';

import Person from "./pages/Person";
import HomePage from "./pages/Home";
import NotFound from "./pages/NotFound";
import GlobalStore from './redux/globalStore';

import './App.css';

function App() {

  const store = GlobalStore();

  useEffect(() => {
    axios.get("https://swapi.dev/api/people")
    .then(res => {
      const { results } = res.data
      for(let i=0;i<results.length;i++){
        const data = results[i];
        store.dispatch({
          type: 'SET_DATA',
          data
        })
      }
    })
    .catch(err => console.log(err))
  }, [store])

  return (
    <Provider store={store}>
      <div className="app">
        <Router>
          <Switch>

            <Route path="/" exact>
              <HomePage />
            </Route>

            <Route path="/person/:id">
              <Person />
            </Route>

            <Route>
              <NotFound />
            </Route>

          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
