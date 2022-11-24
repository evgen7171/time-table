import Tds from "./Tds";
import styles from '../styles/Home.module.css';
import getRowMax from "../helpers/getRowMax";

export default function Table({data}) {
    const rowMax = getRowMax(data);
    const arr = [];
    for (let i = 0; i < rowMax; i++) arr.push(i);
    return <table className={styles.table} id={"timeTable"}>
        <tbody>
        <tr className={styles.head}>
            {
                arr.map((item, key) =>
                    <td key={key}>{item}</td>)
            }
        </tr>
        {
            data.map((row, key) =>
                <tr key={key}>
                    <Tds row={row} rowMax={rowMax}/>
                </tr>
            )
        }
        </tbody>
    </table>
}