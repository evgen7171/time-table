import * as XLSX from 'xlsx/xlsx.mjs';
import {store} from "../redux/store";
import prepareData from "./prepareData";
import getCases from "./getCases";

export default function readFile(file){
    if (file) {
        if (!checkFileName(file)) {
            alert('формат файла не xls/xlsx');
            store.dispatch({type: 'CLEAR_CONTENT'})
            return;
        }

        const fileReader = new FileReader();
        fileReader.onload = event => {
            try {
                let markedKeys = [];
                const {result} = event.target;
                const workbook = XLSX.read(result, {type: 'binary'});
                let data = [];
                let arr = [];
                console.log(workbook)
                for (const sheet in workbook.Sheets) {
                    if (workbook.Sheets.hasOwnProperty(sheet)) {
                        // data = data.concat(XLSX.utils.sheet_to_json(workbook.Sheets[sheet]));
                        data = data.concat(XLSX.utils.sheet_to_html(workbook.Sheets[sheet]));
                        arr = prepareData(data);
                        markedKeys = getCases(workbook.Sheets[sheet]);
                        return markedKeys
                        // console.log(workbook.Sheets[sheet].Merge(['!merges']))
                    }
                }
                return {markedKeys, data, arr}

            } catch (e) {
                console.log('Неверный тип файла. ', e);
                return;
            }
        }
        fileReader.readAsBinaryString(file);
    }
}

function checkFileName(file){
        const type = file.type;
        return type === "application/vnd.ms-excel" || type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
}