import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogsItem'
import Message from './Message/Message'

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs
        .map((dialog) => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} avatar={dialog.avatar}/>);


    let messagesElements = props.dialogsPage.messages
        .map((m) => <Message message={m.message} key={m.id}/>);


    let newMessageText = props.dialogsPage.newMessageText;

    
    let onAddMessage = () => { 
        props.addMessage(); 
    }


    let onMessageChange = (e) => {
        let text = e.target.value;
        props.updateNewMessageText(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            <div>
                <div><textarea className={s.textareaMessage} placeholder='Input new message' onChange={onMessageChange} value={newMessageText}/></div>
                <div><button className={s.sendMessageButton} onClick={onAddMessage}>add message</button></div>
            </div>
            </div>
        </div>
    )
}

export default Dialogs;