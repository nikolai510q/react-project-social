import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
  { id: 1, message: 'Hello. How are you?', likesCount: 4 },
  { id: 2, message: 'Nice nice nice', likesCount: 21 },
  { id: 3, message: 'Texttexttext', likesCount: 2 },
  { id: 4, message: 'Hi. What are you doing?', likesCount: 0 },
];

let dialogs = [
  { id: 1, name: 'Pawka' },
  { id: 2, name: 'Sawka' },
  { id: 3, name: 'Fedya' },
  { id: 4, name: 'Olya' },
  { id: 5, name: 'Valera' }
];

let messages = [
  { id: 1, message: 'Hi' },
  { id: 2, message: 'Hello' },
  { id: 3, message: 'Yo' },
  { id: 4, message: 'How are you?' },
  { id: 5, message: 'Nice work' }

];

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
