import * as serviceWorker from './serviceWorker';
import state, { subscribe } from './redux/state';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {addPost, updateNewPostText, addMessage, updateNewMessageText} from './redux/state';
import { BrowserRouter } from 'react-router-dom';

let rerenderEntireTree = (state) => {
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App state={state} 
           addPost={addPost} 
           updateNewPostText={updateNewPostText}
           addMessage={addMessage}
           updateNewMessageText={updateNewMessageText}/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
}

serviceWorker.unregister();

rerenderEntireTree(state);

subscribe(rerenderEntireTree);