
/*
checkFormatFile(file) {
    const type = file.type;
    return type === "application/vnd.ms-excel" || type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
}

_clear() {
    this.setState({
        file: '',
        tablePreviewUrl: '',
        data: null
    })
}

_getLetNum(cellName) {
    const matches = cellName.match(/([A-Z]+)(\d+)/);
    return {letter: matches[1], number: +matches[2]}
}

getDataKeys(data) {
    const res = [];
    Object.keys(data).forEach(key => {
        if (key[0] !== '!')
            res.push(key);
    });
    return res;
}

_elemInArr(elem, arr) {
    return arr.indexOf(elem) !== -1;
}

getCases(data) {
    const except_letters = ['A', 'B', 'C', 'N', 'O', 'P'];
    const except_numbers = [1, 2, 3];

    const dataKeys = this.getDataKeys(data);
    const myKeys = [];
    dataKeys.forEach(key => {
        const letNum = this._getLetNum(key);
        if (!this._elemInArr(letNum.letter, except_letters) && !this._elemInArr(letNum.number, except_numbers)) {
            myKeys.push(letNum.letter + letNum.number);
        }
    });

    return myKeys;
}


 */
/* TODO подготовить html (html, table, tr, td) -> arr */
/*
prepareData(data) {
    return [];
}

async _handleUpload(e) {
    e.preventDefault();
    let file = e.target.files[0];

    if (file) {
        if (!this.checkFormatFile(file)) {
            alert('формат файла не xls/xlsx');
            document.getElementById('fileElem').value = '';
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
                for (const sheet in workbook.Sheets) {
                    if (workbook.Sheets.hasOwnProperty(sheet)) {
                        // data = data.concat(XLSX.utils.sheet_to_json(workbook.Sheets[sheet]));
                        data = data.concat(XLSX.utils.sheet_to_html(workbook.Sheets[sheet]));
                        arr = this.prepareData(data);
                        markedKeys = this.getCases(workbook.Sheets[sheet]);
                        this.setState({...this.state, markedKeys})
                        // console.log(workbook.Sheets[sheet].Merge(['!merges']))
                    }
                }
                this.setState({...this.state, markedKeys, data, arr})

            } catch (e) {
                console.log('Неверный тип файла. ', e);
                return;
            }
        }
        fileReader.readAsBinaryString(file);
    }
}

_markCells() {
    this.state.markedKeys.forEach(key => {
        const el = document.getElementById(`sjs-${key}`);
        el.classList.add('marked-cell');
    })
}

_prepareCells() {
    const elems = document.querySelectorAll('.marked-cell');
    [...elems].forEach(elem => {
        console.log(elem);
    })
}

componentDidUpdate(prevProps, prevState, snapshot) {
    this._markCells();
    this._prepareCells();
    this.getAllSubjects();
}

async _handleSave(e) {
    e.preventDefault();
    if (!this.state.data) {
        alert('Файл не загружен');
        return;
    }
    const table_elt = document.getElementById("timeTable");
    const workbook = XLSX.utils.table_to_book(table_elt);
    // TODO не работает переименование листа
    // const ws = workbook.Sheets["Лист 1"];
    XLSX.writeFile(workbook, "расписание.xlsb");
}
*/
/** TODO сделать выпадающий список
 *  td по клику - выпадает список в котором можно выбрать значение
 *  после выбора - значение в ячеке меняется
 */
/*
changeCell(e) {
    const list = ['1', 'a', '%'];
    let selectHTML = `<select size="3" multiple name="hero[]">`
        + list.map(item => `<option value="${item}">${item}</option>`).join('')
        + '</select>';
    e.preventDefault();
    let html = e.target.innerHTML;
    if (e.target.tagName === 'OPTION') return;
    html = selectHTML;
    e.target.innerHTML = html;
}

getAllSubjects() {
    this.state.data.forEach(item => {
    })
    console.log();
}


let {data} = this.state;
        let tablePreview = null;
        if (data) {
            tablePreview = ((<table id="timeTable" className={styles.table}>
                <tbody>
                <tr>
                    <td>Файл не загружен</td>
                </tr>
                </tbody>
            </table>))
            document.getElementById('timeTable').innerHTML = getHTML(data);
        } else {
            tablePreview = (<table id="timeTable">
                <tbody>
                <tr>
                    <td>Файл не загружен</td>
                </tr>
                </tbody>
            </table>)
        }


        const getHTML = (data) => {
    const text = data[0];
    const text2 = text.split('body')[1];
    const res = text2.substr(1, text2.length - 2);
    // const res = new DOMParser().parseFromString(text3, "text/html");
    return res;
}

import * as XLSX from 'xlsx/xlsx.mjs';

constructor(props) {
        super(props);
        this.state = {
            file: '',
            tablePreviewUrl: '',
            data: null,
            markedKeys: [],
            arr: []
        };
    }
*/