export default function Tds({row, rowMax}){
    const keys = Object.keys(row);
    const arr = [];
    for (let i = 0; i < rowMax; i++) {
        arr.push(keys.includes(i + '') ? row[i] : '');
    }
    return <>{
        arr.map((item, key) => <td key={key}>{item}</td>)
    }</>
}