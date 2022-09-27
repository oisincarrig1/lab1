
class BMI {

    // constructor used to initialise data in class (To Comment...CTRL+K...CTRL+C)
    //to format (Shift + alt + f)

    constructor(height, weight)
    {
        this.height = height;
        this.weight = weight;

    }

    //method to calculate BMI
    calculateBMI()
    {
        let bmi = this.weight/(this.height**2);
        return bmi;
    }

}

//create object 
let myBMI = new BMI(2,100);
console.log(myBMI.calculateBMI());