import styles from '../styles/Home.module.css';
import TableHeader from "./TableHeader";
import TableContentWeekday from "./TableContentWeekday";

export default function Table() {
    return <table className={styles.table}>
        <tbody>
        <TableHeader/>
        <TableContentWeekday day={1}/>
        </tbody>
    </table>
}