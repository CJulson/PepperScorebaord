const numbers = [13, 7, 8, 4, 2];
var orderedNumbers = []
function orderNumbers() {
    if (numbers[0] > numbers[1]) {
        orderedNumbers = orderedNumbers.push(numbers[0],numbers[1]);
    } else {
        orderedNumbers = orderedNumbers.push(numbers[1],numbers[0]);
    }
    if (numbers[2] < orderedNumbers[1]) {
        orderedNumbers = orderedNumbers.push(numbers[2]);
    } else if (numbers[2] > orderedNumbers[0]) {
        orderedNumbers = orderedNumbers.unshift(numbers[2]);
    } else {
        orderedNumbers = orderedNumbers.pop
        orderedNumbers = orderedNumbers.push(numbers[2],numbers[1]);
    }
}
function printNumbers() {
    for (let i = 0; i < orderedNumbers.length; i++) {
        console.log(orderedNumbers[i]);
    }
}
orderNumbers();
printNumbers();