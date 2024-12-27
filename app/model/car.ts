//  here we will export beacuse this class we will use in another file. To allow this particular class to be getting used in another component.
// Since we have created properties into the class, Now we have to initialize that also.we will do that by using Constructor.
export class  Car {
  carId:number;
  brand:string;
  model:string;
  year:number;
  color:string;
  dailyRate:number;
  carImage:string;
  regNo:string;

  constructor() {
    this.carId = 0;
    this.brand = "";
    this.model = "";
    this.year = 0;
    this.color = "",
    this.dailyRate = 0;
    this.carImage = "";
    this.regNo = "";
  }
}

// Lets create the Interface also.
// In the car list what data we are going to get from the API , just to explain we are creating interface.
// Whenever we are creating the interface we will start with the Letter I.
export interface IcarList {
  // Here instaed of semicolon we can make use of Comma also in interface.
// In interface doesnt have any Constructor so we dont need to intialize the properties.
// This interface we will use 
  carId:number,
  brand:string,
  model:string,
  year:number,
  color:string,
  dailyRate:number,
  carImage:string,
  regNo:string,

}