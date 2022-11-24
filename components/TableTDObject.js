import {useEffect, useState} from "react";
import styles from "../styles/Home.module.css";

const Elem1 = ({selected}) => {
    return <>{selected}</>
}
const Elem2 = ({selected}) => {
    const [value, setValue] = useState('');
    useEffect(() => {
        console.log(value)
    }, [value])
    return <select onChange={(e) => setValue(e.target.value)}>
        <option value={selected}>{selected}</option>
        <option value={1}>1</option>
        <option value={2}>2</option>
    </select>
}
const TDOrSelect = ({selected, colSpan, selectValue}) => {
    const [isSelect, setIsSelect] = useState(false);
    const click = (e) => {
        e.preventDefault();
        if (!isSelect) setIsSelect(true);
    }
    const leave = (e) => {
        e.preventDefault();
        setIsSelect(false);
    }
    return <td
        onMouseLeave={(e)=>leave(e)}
        className={styles.tableObject}
        colSpan={colSpan}
        onClick={(e) => click(e)}>{
        !isSelect ? <Elem1 selected={selected}/> :
            <Elem2 selected={selected}/>
    }</td>
}

export function TableTDObject({item, classKey, data, k, kk}) {
    const checkHighClassKey = (classKey) => classKey === '10a' || classKey === '11a';
    if (checkHighClassKey(classKey)) {
        if (typeof item == 'string')
            return <TDOrSelect colSpan="3" selected={item}/>
        else if (typeof item === 'object') return <>
            {
                item.map(i => (
                    <TDOrSelect selected={i}/>)
                )
            }
        </>
    } else return <TDOrSelect selected={item}/>
}