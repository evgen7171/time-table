// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import ExcelJS from 'exceljs';

export default function handler(req, res) {
    const {path} = req.body;

    const workbook = new ExcelJS.Workbook();
    const data = [];

    workbook.xlsx.readFile(path)
        .then(r => {
            const worksheet = workbook.getWorksheet(1);
            console.log(worksheet)
            const rowCount = worksheet.rowCount;
            for (let i = 0; i < rowCount; i++) {
                const dataRow = [];
                const row = worksheet.getRow(i + 1);
                row.eachCell(function (cell, colNumber) {
                    let value = cell.value;
                    // console.log(cell)
                    // if (typeof value == "object") value = value.text;
                    dataRow.push(value);
                    // console.log('Cell ' + colNumber + ' = ' + JSON.stringify(cell.value.text));
                });
                data.push(dataRow);
            }
            // console.log(worksheet.getRow(2));
            // console.log(JSON.stringify(data));
            // res.status(200).json({message: 'File read...'})
            // res.send(123);
        }).finally(r=>{
        res.status(200).json({message: JSON.stringify(data)});
    })
}
