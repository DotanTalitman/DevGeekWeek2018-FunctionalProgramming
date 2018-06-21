var users = [{
        name: "dotan",
        age: 34,
        title: "Devloper",
        salary: 100
    },
    {
        name: "ron",
        age: 20,
        title: "Devloper",
        salary: 100
    },
    {
        name: "yosi",
        age: 25,
        title: "",
        salary: 100
    },
    {
        name: "john",
        age: 29,
        title: "CEO",
        salary: 100
    }
]
//var newData = [];
//get users under the age 30;

// users.forEach(user => {
//     if (user.age < 30) {
//         // if (!user.title) user.title="no Title"
//         //if(user.title=="CEO") user.salary=user.salary*1.7;
//         // else user.salary= user.salary*1.1;
//         newData.push(user)


//     }
// })
// newData.forEach(user => {
//     if (!user.title) user.title = "no Title"
//     if (user.title == "CEO") user.salary = user.salary * 1.7;
//     else user.salary = user.salary * 1.1;

// })
//console.log(newData)


//function filterUnder30(array) {
function filterUnder30() {
    let array = this;
    let newData = [];
    for (var i = 0; i < array.length; i++) {
        var item = array[i];
        if (item.age < 30) newData.push(item)
    }
    return newData
}

//function addTitle(array) {\
function addTitle() {
    let array = this;
    let newData = [];
    for (var i = 0; i < array.length; i++) {
        var item = array[i];
        if (!item.title) {
            var newObj = Object.assign(item, {
                title: "No Title"
            })
            newData.push(newObj)
        } else {
            newData.push(item)
        }

    }
    return newData
}

//function mapSalary(users) {
function mapSalary() {
    let array = this;
    let newData = [];
    for (var i = 0; i < array.length; i++) {
        var item = array[i];
        if (item.title == "CEO") {
            var newObjet = Object.assign({}, item)
            newObjet.salary = user.salary * 1.7
            newData.push(newObjet)
        } else {
            newData.push(item);
        }

    }

    return newData;
}

function myFilter(fn) {
    let array = this;
    let newData = []
    for (var i = 0; i < array.length; i++) {
        var item = array[i];
        if (fn(item)) newData.push(item);
    }
    return newData
}

function myMap(fn) {
    let array = this;
    let newData = []
    for (var i = 0; i < array.length; i++) {
        var item = array[i];
        var newVal = fn(item, i, array);
        newData.push(newVal);
    }
    return newData
}

// let result = filterUnder30(users)
// result = addTitle(result)
// result = mapSalary(result)
//let result = filterUnder30(addTitle(mapSalary(users)))

//Array.prototype.filterUnder30 = filterUnder30
//Array.prototype.addTitle = addTitle
Array.prototype.mapSalary = mapSalary
Array.prototype.myFilter = myFilter
Array.prototype.myMap = myMap

function setSalary(user, index, array) {

    if (user.title == "CEO") {
        var newObjet = Object.assign({}, user)
        newObjet.salary = user.salary * 1.7

        return newObjet
    }

    return user;

}

function setTitle(user) {
    if (!user.title) {
        var newObjet = Object.assign({}, user)
        newObjet.title = "no title"
        return newObjet
    }
    return user
}

let result = users
    //.filterUnder30()
    //.mapSalary();
    .myFilter(user => user.age < 30)
    .myMap(user => setTitle(user))
    .myMap(user => setSalary(user))

console.log(result)