import React, {useEffect, useState} from "react";
import styles from '../styles/Home.module.css';
import {store} from "../redux/store";
import Table from "./Table";

export default function Content() {
    const arr = {
        1: {
            '5a': '1',
            '5b': '3',
            '5v': '4',
            '10a': '2',
        },
        2: {
            '5a': '1',
            '5b': '1',
            '5v': '1',
            '10a': '2',
        },
        3: {
            '5a': '1',
            '5b': '1',
            '5v': '1',
            '10a': ['2', '3', '4'],
        }
    }
    const getNum = (num) => {
        if (num === 1) return '8.00';
        if (num === 2) return '9.10';
        if (num === 3) return '10.20';
    }
    return <div className={styles.content}>
        <Table/>

        <br/>
        <table className={styles.table}>
            <tbody className={styles.TDCenter}>
            <tr>
                <td rowSpan="3" colSpan="2"/>
                <td rowSpan="2">Класс / кабинет</td>
                <td rowSpan="2">5а</td>
                <td rowSpan="2">5б</td>
                <td rowSpan="2">5в</td>
                <td colSpan="3">10а</td>
            </tr>
            <tr>
                <td>гум</td>
                <td>техн</td>
                <td>науч</td>
            </tr>
            <tr>
                <td>Время</td>
                <td>206</td>
                <td>203</td>
                <td>210</td>
                <td colSpan="3">110</td>
            </tr>
            <tr>
                <td rowSpan="10">Понедельник</td>
                <td>{Object.keys(arr)[0]}</td>
                <td>{getNum(1)}</td>
                {
                    Object.keys(arr[1]).map(key => (
                        key !== '10a' ? <td>{arr[1][key]}</td> :
                            <td colSpan="3">{arr[1][key]}</td>
                    ))
                }
            </tr>
            <tr>
                <td>{Object.keys(arr)[1]}</td>
                <td>{getNum(2)}</td>
                {
                    Object.keys(arr[2]).map(key => (
                        key !== '10a' ? <td>{arr[2][key]}</td> :
                            <td colSpan="3">{arr[2][key]}</td>
                    ))
                }
            </tr>
            <tr>
                <td>{Object.keys(arr)[2]}</td>
                <td>{getNum(3)}</td>
                {
                    Object.keys(arr[3]).map(key => (
                        key !== '10a' ? <td>{arr[3][key]}</td> :
                            <>
                                <td>{arr[3][key][0]}</td>
                                <td>{arr[3][key][1]}</td>
                                <td>{arr[3][key][2]}</td>
                            </>
                    ))
                }
            </tr>
            </tbody>
        </table>
    </div>
/** TODO
 сделать из этого примера сложное условие
 для 10-11 классов - предметов (когда надо разбивать ячейки)
 и для среднего звена,
 когда надо выводить день недели (!)
*/
 }