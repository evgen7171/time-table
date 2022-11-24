import React, {useRef, useState} from "react";
import styles from '../styles/Home.module.css';
import {store} from "../redux/store";
import Link from "next/link";

export default function Menu() {

    return <div className={styles.menu}>
        <div className={styles.buttons}>
            Здесь будет меню...
        </div>
    </div>
}
