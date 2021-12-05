function range(start, end, step = start < end ? 1 : -1) {
    let res = []

    if (step > 0) {
        for (let i = start; i <= end; i += step)
            res.push(i)
    } else {
        for (let i = start; i >= end; i += step)
            res.push(i)
    }
    return res
}

function sum(arr) {
    return arr.reduce((a, b) => a + b, 0)
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55