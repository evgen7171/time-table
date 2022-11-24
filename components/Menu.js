import React, {useRef, useState} from "react";
import styles from '../styles/Home.module.css';
import {store} from "../redux/store";
import Link from "next/link";

export default function Menu({isProcessed}) {
    const fileRef = useRef(null);
    const {render} = store.getState().methodReducer.methods
    const {processed} = store.getState().dataReducer

    const download = (e) => {
        e.preventDefault();
        fileRef.current.click()
    }
    const clear = (e) => {
        e.preventDefault();
        store.dispatch({type: 'CLEAR_CONTENT'});
        store.dispatch({type: 'CLEAR_FILE'});
        // store.dispatch({type: 'PROCESSED'})
        render();
    }
    const [file, setFile] = useState('');
    const changeFile = (e) => {
        e.preventDefault();
        store.dispatch({type: 'SET_FILE', file: e.target.files[0]})
        render();
    }

    return <div className={styles.menu}>
        <div className={styles.buttons}>
            {!isProcessed ? (<>
                        <div className={styles.btnGreen}
                             onClick={(e) => download(e)}>
                            загрузить
                        </div>
                        <div className={styles.btnRed}
                             onClick={(e) => clear(e)}>
                            очистить
                        </div>
                        {processed && (
                            <Link href="/processed">
                                <div className={styles.btnMagenta}
                                     onClick={(e) => redirectToData(e)}>
                                    &#8594;&nbsp;в данные
                                </div>
                            </Link>)}
                    </>
                )
                : (
                    <Link href="/">
                        <div className={styles.btnMagenta}>
                            &#8592;&nbsp;назад
                        </div>
                    </Link>
                )}
        </div>

        <input type='file' hidden={true} ref={fileRef}
               name='file' onChange={(e) => changeFile(e)}
               value={file}/>
    </div>
}
