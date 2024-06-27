// Question no 45 
// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
// define a function to create a car object with optional options ...
function create_car(Manufacturer, model, ...options) {
    // initialize a car object with manufacturer and model
    let car = {
        Manufacturer: Manufacturer,
        model: model,
    };
    // add additional option to the car object
    options.forEach(options => {
        let [key, value] = options.split(":");
        car[key.trim()] = value.trim();
    });
    return car;
}
// call the function to create a car object
let my_car = create_car("Toyota", "corrolla", "color:black", "sunroof:ture", "year:2024");
// print the varibableb 
console.log(my_car);
export {};
