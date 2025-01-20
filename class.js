//this is the json format
const dog={
    name:"kutta",
    age:52
}
console.log(dog["name"]);

//thats one way to call it
// through constructor we can call it by the following way 
class animal {
    constructor(legs,speaks){
        this.legs=legs;
        this.speaks=speaks;
   }
   speaki(){
   console.log("mei to bhokne wala hu");
}
}
let dogi = new animal("4","bhow bhow");
console.log(dogi.legs);
dogi.speaki();

//note by using the static function you can accese the function directly