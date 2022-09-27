
 class Vehicle{
    //create constructor
    constructor(make, model, year)
    {
        this.make = make;
        this.model = model;
        this.year = year;
    }

// create method to show instance of class
    Information(){

        console.log(`Make: ${this.make}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);

    }
}
//new child class to inherit parent class
class Car extends Vehicle{
    constructor(make, model, year, doors)
    {
        super(make, model,year);
        this.doors = doors;
    }

    //create information method
    Information(){

        super.Information();
        console.log(`Doors: ${this.doors}`);
    }
}
//object to show instamce of class
let myCar = new Car(`VW`, `Golf`, 2, 5);
myCar.Information();