function reverseArray(arr) {
    let res = []
    for (let i = arr.length - 1; i >= 0; i--) {
        res.push(arr[i])
    }
    return res
}

function swap(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

function reverseArrayInPlace(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        swap(arr,i,arr.length - i - 1)
    }
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]