// Question no 38Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.

function describe_city(nameOfCity:string,country:string = "Asia") {
    return `${nameOfCity}} is in ${country}`;
};

// 3 cities
let city1 = describe_city("south africa,cape town");
let city2 =describe_city("india" , "delhi");
let city3 = describe_city("pakistan","Hyderabad is in pakistan");
let city4 = describe_city("Dubai","UAE");

console.log(city1);
console.log(city2);
console.log(city3);
console.log(city4);




