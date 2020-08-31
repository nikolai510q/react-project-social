import * as serviceWorker from './serviceWorker';
import store from './redux/reduxStore';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

{/* <React.StrictMode> */}
// </React.StrictMode>


//отрисовка дерева 1 раз 
// let rerenderEntireTree = (state) => {
ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>,
  document.getElementById('root')
);
// }

serviceWorker.unregister();
// rerenderEntireTree(store.getState());

//connect сам все перерисует
// store.subscribe( () => {
//   let state = store.getState();
//   rerenderEntireTree(state);
// } );