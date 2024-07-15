console.log("store for fruits")
class  store {
constructor(location)
{

//this.storageOfFood =[]


//this.food = food;
//this.priceOfFood = priceOfFood;
this.location = location
}

displayFooDName(food)
{
    for(var as of food)
    {
        console.log(as.name);   
    }

}
DisplayFoodPrice(price)
{
for(var az  of price)
{
    console.log(az.price + az.prc);

}
}
displayAvailableFood(store)
{

  
   // for(let i=0;i<this.storageOfFood.length;i++)
   // {
   // asin += this.storageOfFood[i]
  //  console.log(asin);
   // }stor
   console.log("this is all the food there is available")
   let flatten  =''
for(var  as of store){

flatten += ` ${as} `
}
console.log(flatten);    

}



}

class food{
    constructor(name,price) 
    {
        this.name = name;
        this.price = price;
        this.isAvailable = true; 

    }


}


class Customer{
    constructor(name,age,address,gender,money)  
    
    {
        this.money= money
this.name = name ;
this.age= age;
this.address= address;
this.gender = gender;
    }
}

let storage  = [ "banana ", "mangoe","apple","cocktail","orange"]
let storage2 = [{"name":"cock"},{"name":"marshmallow"},{"name":"peanut"}]
console.log(storage2[0].name);

const storeClass =  new store("japan")
storeClass.displayFooDName(storage2);

storeClass.displayFoodPrice(storage2);

