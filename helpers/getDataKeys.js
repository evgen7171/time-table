export default function getDataKeys(data) {
    const res = [];
    Object.keys(data).forEach(key => {
        if (key[0] !== '!')
            res.push(key);
    });
    return res;
}