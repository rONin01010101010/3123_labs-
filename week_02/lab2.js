//1
const greetter = (myArray, counter) => {
     const greetText = "Hello"; 

     for (let index = 0; index < myArray.length; index++){
         console.log(greetText + myArray[index])
     }    
 } 

 greetter(['Randy savage' , "ric flair", "hulk hogan"], 3 ) 

 //2 
const capitalize = (str) => {
     const chars = [...str];
     chars[0] = chars[0].toUpperCase();

     return chars.join("");
  }
  console.log(capitalize('cAR'))

//3 
const colors = ['red', 'green', 'blue']

const capital = colors.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
console.log(capital);

//4 
const values = [1,60,34,30,20,5]
 let che = values.filter((num) => num < 20); 
console.log(che); 


//5
const array = [1,2,3,4]
const calculateSum = array.reduce(
    (accumulator, currentValue) => accumulator + currentValue
)
const calculateProduct = array.reduce(
    (accumulator,currentValue) => accumulator * currentValue, 
);

console.log(calculateProduct);
console.log(calculateSum);

//6 
class Car {
    constructor(model,year){ 
     this.model = model; 
     this.year = year; 
    }
 
    details(){
        return this.model, this.year;
    }


}

class Sedan extends Car{
    constructor(cost,model,year){
    super(model,year);
    this.cost = cost;  
    }
   
    info(){
        return this.model;  
    }

} 

const car2 = new Car ('nissian', 2005); 
console.log(car2.details());

const sedan = new Sedan ('this', 2033, 200004); 
console.log(sedan.info());