let arrays = [[1, 2, 3], [4, 5], [6]]

let res = arrays.reduce((pre, curr) => pre.concat(curr), [])

console.log(res)
// → [1, 2, 3, 4, 5, 6]