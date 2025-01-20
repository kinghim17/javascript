//asynchronous code often looks ugly promises are syntactical sugar that makes the code slightly readable
const fs = require("fs");
function himread(){
    return new Promise((resolve, reject) => {
        fs.readFile("a.txt","UTF-8",function(err,data){
            resolve(data);
        })
    })
}
function done(data){
    console.log(data);
}


himread().then(done);