import styles from "../styles/Home.module.css";
import {getLessonTime} from "../helpers/functions";
// import {TableTDObject} from "./TableTDObject";
import {Fragment} from 'react'
import {data} from '/data/data.json'

export default function TableContentWeekday({day}) {
    if (day < 1 || day > 5) return <></>
    const weekdays = {
        'monday': 'Понедельник',
        'tuesday': 'Вторник',
        'wednesday': 'Среда',
        'thursday': 'Четверг',
        'friday': 'Пятница'
    }
    console.log(data)
    return <Fragment>
        {
            Object.keys(data).map(day => <>
                <tr key={day}>
                    {
                        Object.keys(data[day]).map(d => <>
                            {
                                +d === 1 && <td rowSpan="10">{weekdays[day]}</td>
                            }
                            <td key={d}>{d}</td>
                        </>)
                    }
                </tr>
            </>)
        }
        {/*<tr>*/}
        {/*    <td rowSpan="10">Понедельник</td>*/}
        {/*</tr>*/}
        {/*<tr>*/}
        {/*    <td>1</td>*/}
        {/*    <td>1</td>*/}
        {/*    <td>1</td>*/}
        {/*</tr>*/}
        {/*<tr>*/}
        {/*    <td>1</td>*/}
        {/*    <td>1</td>*/}
        {/*    <td>1</td>*/}
        {/*</tr>*/}
        {/*{*/}
        {/*    Object.keys(data).map(day => (*/}
        {/*        <tr className={styles.TDCenter}>*/}
        {/*            <td rowSpan="10">{weekdays[day]}</td>*/}
        {/*        </tr>*/}
        {/*    ))*/}
        {/*}*/}
        {/*{*/}
        {/*        Object.keys(data).map(k =>*/}
        {/*            (<tr key={k} className={styles.TDCenter}>*/}
        {/*                <td>{+k + 1}</td>*/}
        {/*                <td>*/}
        {/*                    {getLessonTime(+k + 1)}*/}
        {/*                </td>*/}
        {/*                {*/}
        {/*                    // Object.keys(data[k]).map(kk =>*/}
        {/*                    //     <TableObjectView/>*/}
        {/*                        // <TableTDObject key={kk} data={data} k={k} kk={kk} item={data[k][kk]}/>)*/}
        {/*                }*/}
        {/*            </tr>)*/}
        {/*        )*/}
        {/*    }*/}
    </Fragment>
}