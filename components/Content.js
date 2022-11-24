import React, {useEffect, useState} from "react";
import styles from '../styles/Home.module.css';
import {store} from "../redux/store";

export default function Content() {
    const [content, setContent] = useState(store.getState().contentReducer.content);
    useEffect(()=>{
        setContent(store.getState().contentReducer.content)
    },[store.getState().contentReducer.content])
    return <div className={styles.content}>
        {store.getState().fileReducer.file ? store.getState().fileReducer.file.name: ''}
        {content}
    </div>
}