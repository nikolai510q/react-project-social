import React from 'react';
import s from './Dialogs.module.css';


const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Pawka
                </div>
                <div className={s.dialog}>
                    Sawka
                </div>
                <div className={s.dialog}>
                    Fedia
                </div>
                <div className={s.dialog}>
                    Olya
                </div>
                <div className={s.dialog}>
                    Valera
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>Hello</div>
                <div className={s.message}>Yo</div>
            </div>
        </div>
    )
}

export default Dialogs;