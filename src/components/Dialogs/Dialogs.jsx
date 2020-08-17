import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogsItem'
import Message from './Message/Message'
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogsReducer';

const Dialogs = (props) => {
    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogs
        .map((dialog) => <DialogItem name={dialog.name} id={dialog.id} avatar={dialog.avatar}/>);

    let messagesElements = state.messages
        .map((m) => <Message message={m.message} />);

    let newMessageText = state.newMessageText;

    

    let addMessage = () => { 
        props.store.dispatch( addMessageActionCreator() ); }


    let onMessageChange = (e) => {
        let text = e.target.value;
        props.store.dispatch( updateNewMessageTextActionCreator(text) );
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            <div>
                <div><textarea onChange={onMessageChange} value={newMessageText}/></div>
                <div><button onClick={addMessage}>add message</button></div>
            </div>
            </div>
        </div>
    )
}

export default Dialogs;