export default function getRowMax(arr) {
    let res = 0;
    arr.map((row) => {
        let len = Object.keys(row).length;
        res = len > res ? len : res;
    })
    return res;
}