

let array = ["1", 4, 6, "hi", 8, 7, "4", 5, "foo", 7, 3, 6];

//let newArray = array.map(item => parseInt(item))

//console.log(newArray);




let newArray = array
    .map(item => parseInt(item))
    .filter(item => !isNaN(item))
    .reduce((x, y) => x + y)

console.log(newArray);

