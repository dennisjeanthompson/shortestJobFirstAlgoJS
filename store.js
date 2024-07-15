console.log("store for fruits")
class  store {
constructor(location)
{

//this.storageOfFood =[]


//this.food = food;
//this.priceOfFood = priceOfFood;
this.location = location
this.storage = [ ]
}

addFood(food,price)
{
    this.storage.push({name:food, price:price})

}
removeFood(food)
{
    for(let i=0;i<this.storage.length;i++)
    {
        if(this.storage[i].name === food)
        {
            this.storage.splice(i,1);
            break;
        }
    }

}
displayLocation()
{
    console.log(`store is in ${this.location}`);

}

displayFooDName(food)
{
    for(var as of food)
    {
        console.log(as.name);   
    }

}
displayFoodPrice(price)
{
for(var az  of price)
{
    console.log( `name: ${az.name} price: ${az.price}`);

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
foodDisplayDetails()
{
    
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
    buyFood(store,food)
    {
        store.buyFood = false;

    }
}

let storage  = [ "banana ", "mangoe","apple","cocktail","orange"]
let storage2 = [{"name":"cock","price":1002},{"name":"marshmallow","price":9000},{"name":"peanut","price":999999}]
console.log(storage2[0].name);

const storeClass =  new store("japan")
storeClass.displayFooDName(storage2);

storeClass.displayFoodPrice(storage2);
storeClass.addFood("cock",9000);

