function importArray() {
    let arr = [];
    for (let i = 0; i < 10; i++) {
        arr[i] = Math.floor(Math.random() * 100);
    }
    return arr;
}

function displayArr(arr) {
    for (let i = 0; i < arr.length; i++) {
        document.write(arr[i] + "<br>");
    }

}

function findMin(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
        }
    }
    return min;
}

function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}
let arr = importArray();
displayArr(arr);
let valueMin = findMin(arr);
let valueMax = findMax(arr);
document.write("Min is " + valueMin);
document.write("<br>"+" Max is " + valueMax);
