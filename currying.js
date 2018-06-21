//1
// function add(a,b)
// {
//     return function(){
//         return a+b;
//     }
// }

// var fn=add(1,2);
// console.log(fn())

//2
// function add(a,b)
// {
//     return function(b){
//         return a+b;
//     }
// }

// var result=add(1)(2);
// console.log(result)

//3
// function doInTheFuture(time, data) {
//     return (fn) => {
//         setTimeout(() => {
//             fn(data);
//         }, time);
//     }
// }

// var future = doInTheFuture(3000, "hello future")
// future((x) => alert(x))




class Future {

    constructor(andDo) {
        this.andDo = andDo
    }
}

function ajax(cb) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText)
            cb(data)
        }
    };
    xhttp.open("GET", "https://dog.ceo/api/breeds/image/random", true);
    xhttp.send();
}

function getData() {

    return new Future(go => ajax(go));
}



getData().andDo(res => {
    if (res.status === "success") {
        let img=document.createElement("img")
        img.src=res.message 
        document.body.appendChild(img);
        
    }
})