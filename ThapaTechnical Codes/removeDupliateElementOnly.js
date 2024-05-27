let array = [1, 2, 3, 4, 4, 5, 6, 2, 3];
let duplicates = array.filter((item, index) => array.indexOf(item) !== index && array.indexOf(item) === index);
console.log(duplicates)
console.log([...new Set(duplicates)]); // Output: [2, 3, 4]
