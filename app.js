let car = {
    producer: 'BMW',
    model: 'M4',
    year: '2010',
    avgSpeed: 125.3
};

const Info = (car) => {
    console.log(`Виробник ${car.producer}, Модель: ${car.model}, Рік випуску: ${car.year}, Середня швидкість: ${car.avgSpeed}`);
}
const TravelTime =(car, distance)=> {
    let time = distance / car.avgSpeed; 
    let breaks = Math.floor(time / 4);     

    let totalTime = time + breaks;  

    return totalTime.toFixed(2);
}
let distance = 360;
let travelTime = TravelTime(car, distance);
Info(car);
console.log(`Час, необхідний для подолання відстані ${distance} км: ${travelTime} годин.`);





const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
const simplifyFraction = ({ numerator, denominator }) => {
    const divisor = gcd(numerator, denominator);
    return {
        numerator: numerator / divisor,
        denominator: denominator / divisor
    };
};

const add = (f1, f2) => simplifyFraction({
    numerator: f1.numerator * f2.denominator + f2.numerator * f1.denominator,
    denominator: f1.denominator * f2.denominator
});

const subtract = (f1, f2) => simplifyFraction({
    numerator: f1.numerator * f2.denominator - f2.numerator * f1.denominator,
    denominator: f1.denominator * f2.denominator
});

const multiply = (f1, f2) => simplifyFraction({
    numerator: f1.numerator * f2.numerator,
    denominator: f1.denominator * f2.denominator
});

const divide = (f1, f2) => simplifyFraction({
    numerator: f1.numerator * f2.denominator,
    denominator: f1.denominator * f2.numerator
});

let fraction1 = { numerator: 1, denominator: 2 };
let fraction2 = { numerator: 3, denominator: 4 };

console.log(`Сума: ${add(fraction1, fraction2).numerator}/${add(fraction1, fraction2).denominator}`);
console.log(`Різниця: ${subtract(fraction1, fraction2).numerator}/${subtract(fraction1, fraction2).denominator}`);
console.log(`Добуток: ${multiply(fraction1, fraction2).numerator}/${multiply(fraction1, fraction2).denominator}`);
console.log(`Частка: ${divide(fraction1, fraction2).numerator}/${divide(fraction1, fraction2).denominator}`);
