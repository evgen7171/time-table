import styles from '../styles/Home.module.css'
import Menu from "../components/Menu";
import React, {useEffect, useState} from "react";
import Content from "../components/Content";
import readFile from "../helpers/readFile";
import {store} from "../redux/store";
import {addStoreMethod, addStoreMethods} from "../redux/functions";

export default function Home() {
    const [renderFlag, setRenderFlag] = useState(false);
    const render = () => setRenderFlag(!renderFlag);
    useEffect(() => {
    }, [renderFlag])
    addStoreMethod({render})
    useEffect(()=>{
        store.dispatch({type: 'SET_FILE', file: store.getState().file})
    },[store.getState().file])
    const handleSelected = (selected) => {
        const res = readFile(selected.value)
        console.log(res)
    }
    addStoreMethods({render, handleSelected})
    return (
        <div className={styles.container}>
            <Menu/>
            <Content/>
        </div>
    )
}
