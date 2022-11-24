export default function getLetNum(cellName) {
    const matches = cellName.match(/([A-Z]+)(\d+)/);
    return {letter: matches[1], number: +matches[2]}
}