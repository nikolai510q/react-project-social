import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogsItem'
import Message from './Message/Message'
import { reset, Field, reduxForm } from 'redux-form';

const Dialogs = (props) => {
	const addNewMessage = (formData, dispatch) => {
		// console.log(formData)
		props.addMessage(formData.newMessageBody);
		dispatch(reset("sendMessage"));
	}

	let dialogsElements = props.dialogsPage.dialogs
		.map((dialog) => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} avatar={dialog.avatar} />);

	let messagesElements = props.dialogsPage.messages
		.map((m) => <Message message={m.message} key={m.id} />);

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				{dialogsElements}
			</div>
			<div className={s.messages}>
				{messagesElements}
				<div>
					<AddMessageReduxForm onSubmit={addNewMessage} />
				</div>
			</div>
		</div>
	)
}

const AddMessageForm = (props) => {
	return (
		<div>
			<form onSubmit={props.handleSubmit}>
				<div>
					<Field component='textarea' placeholder='Input new message' name='newMessageBody' />
					<button>SEND MESSAGE</button>
				</div>
			</form>
		</div>
	)
}

const AddMessageReduxForm = reduxForm({ form: 'sendMessage' })(AddMessageForm);

export default Dialogs;