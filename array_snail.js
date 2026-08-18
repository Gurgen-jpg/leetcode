Array.prototype.snail = function (rowsCount, colsCount) {
    if (this.length < rowsCount * colsCount) return [];
    let res = new Map();
    let j = 0;
    while (j < colsCount) {
        res.set(j, [])
        if (j % 2 === 0) {
            for (let i = j * rowsCount; i < (j * rowsCount) + rowsCount; i++) {
                res.get(j).push(this[i])
            }
        } else {
            for (let i = (j + 1) * rowsCount - 1; i >= j * rowsCount; i--) {
                res.get(j).push(this[i])
            }
        }
        j++
    }

    const rows = new Map();
    for (let i = 0; i < rowsCount; i++) {
        rows.set(i, [])
        for (let r of res.keys()) {
            rows.get(i).push(res.get(r)[i])
        }
    }

    return [...rows.values()]
}

nums = [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15]
console.log(nums.snail(5, 4))