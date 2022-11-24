import getDataKeys from "./getDataKeys";
import getLetNum from "./getLetNum";
import elemInArr from "./elemInArr";

export default function getCases(data) {
    const except_letters = ['A', 'B', 'C', 'N', 'O', 'P'];
    const except_numbers = [1, 2, 3];

    const dataKeys = getDataKeys(data);
    const myKeys = [];
    dataKeys.forEach(key => {
        const letNum = getLetNum(key);
        if (!elemInArr(letNum.letter, except_letters) && !elemInArr(letNum.number, except_numbers)) {
            myKeys.push(letNum.letter + letNum.number);
        }
    });

    return myKeys;
}