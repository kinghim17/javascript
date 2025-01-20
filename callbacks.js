function sum(a,b,fntocall){
    let result=a+b;
    fntocall(result);
}
function give(data){
    console.log(data);
}
sum(3,5,give);

// best use case of this when you are rendering if you want to do add and sub through the function

