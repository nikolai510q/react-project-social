import * as serviceWorker from './serviceWorker';
import store from './redux/reduxStore';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


let rerenderEntireTree = (state) => {
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App state={state} dispatch={store.dispatch.bind(store)} store={store}/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
}

serviceWorker.unregister();
rerenderEntireTree(store.getState());


store.subscribe( () => {
  let state = store.getState();
  rerenderEntireTree(state);
} );