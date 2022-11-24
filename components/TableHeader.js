import styles from "../styles/Home.module.css";

export default function TableHeader() {
    return <>
        <tr className={styles.TDCenter}>
            <td rowSpan="3" colSpan="2"/>
            <td rowSpan="2">Класс / Кабинет</td>
            <td rowSpan="2">5а</td>
            <td rowSpan="2">5б</td>
            <td rowSpan="2">5в</td>
            <td rowSpan="2">6а</td>
            <td rowSpan="2">6б</td>
            <td rowSpan="2">6в</td>
            <td rowSpan="2">7а</td>
            <td rowSpan="2">7б</td>
            <td rowSpan="2">8а</td>
            <td rowSpan="2">8б</td>
            <td rowSpan="2">9а</td>
            <td rowSpan="2">9б</td>
            <td colSpan="3">10A</td>
            <td colSpan="3">11A</td>
        </tr>
        <tr className={styles.TDCenter}>
            <td>Гуманитарный профиль</td>
            <td>Технологический профиль</td>
            <td>Естественно-научный профиль</td>
            <td>Гуманитарный профиль</td>
            <td>Технологический профиль</td>
            <td>Естественно-научный профиль</td>
        </tr>
        <tr className={styles.TDCenter}>
            <td>Время</td>
            <td rowSpan="2">206</td>
            <td rowSpan="2">203</td>
            <td rowSpan="2">210</td>
            <td rowSpan="2">107</td>
            <td rowSpan="2">202</td>
            <td rowSpan="2">207</td>
            <td rowSpan="2">100</td>
            <td rowSpan="2">106</td>
            <td rowSpan="2">103</td>
            <td rowSpan="2">104</td>
            <td rowSpan="2">101</td>
            <td rowSpan="2">205</td>
            <td colSpan="3">110</td>
            <td colSpan="3">212</td>
        </tr>
    </>
}
