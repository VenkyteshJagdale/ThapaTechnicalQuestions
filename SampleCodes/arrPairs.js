let arr = [2, 16, 15, 3, 12, 6, 9, 9, 10, 8];
let target = 18;

function findPairs(arr, target) {
    let pairs = [];

    // Loop through the array
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                pairs.push([arr[i], arr[j]]);
            }
        }
    }

    return pairs;
}

console.log(findPairs(arr, target));