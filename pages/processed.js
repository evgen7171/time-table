import React from "react";
import styles from "../styles/Home.module.css";
import Menu from "../components/Menu";
import Content from "../components/Content";

export default function Processed() {
    return (
        <div className={styles.container}>
            <Menu isProcessed/>
            <Content/>
            ---processed
        </div>
    )
}