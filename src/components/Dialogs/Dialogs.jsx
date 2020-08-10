import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogsItem'
import Message from './Message/Message'

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs
        .map((dialog) => <DialogItem name={dialog.name} id={dialog.id} avatar={dialog.avatar}/>);

    let messagesElements = props.state.messages
        .map((m) => <Message message={m.message} />)

    let newMessageElement = React.createRef();
    let addMessage = () => { props.addMessage(); } //state function

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text); //state function
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            <div>
                <div><textarea onChange={onMessageChange} ref={newMessageElement} value={props.newMessageText}></textarea></div>
                <div><button onClick={addMessage}>add message</button></div>
            </div>
            </div>
        </div>
    )
}

export default Dialogs;