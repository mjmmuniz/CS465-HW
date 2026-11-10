/** Exercise 01 - Coins **/

// Add your function here 
const calculateChange = function calcChange(amount) {
    //return error if out of bounds
    if (amount < 0.01) {return `$${amount} ==> Error: the number is too small`;}
    if (amount > 100) {return `$${amount} ==> Error: the number is too large`;}
    
    // calculations
    let dollar = Math.floor(amount);
    let quarter = Math.floor((amount - dollar) / 0.25);
    let dime = Math.floor((amount - dollar - (quarter * 0.25)) / 0.10);
    let nickel = Math.floor((amount - dollar - (quarter * 0.25) - (dime * 0.10)) / 0.05);
    let penny = Math.round((amount - dollar - (quarter * 0.25) - (dime * 0.10) - (nickel * 0.05)) * 100);
    
    // potential outputs
    let amounts = [dollar, quarter, dime, nickel, penny];
    let single = ["dollar", "quarter", "dime", "nickel", "penny"];
    let multi = ["dollars", "quarters", "dimes", "nickels", "pennies"];
    let result = [];

    // get and add single/multi results into array
    result.push(getResult(dollar), getResult(quarter), getResult(dime), getResult(nickel), getResult(penny));

    // empty output statement
    let answer = "";

    // iterate through results to form output statement
    for (let i = 0; i < amounts.length; ++i) {
        // if result was 1
        if (result[i] === 1) {
            // if output statement was still empty
            if (answer === "") {
                answer = `${amounts[i]} ${single[i]}`;
            }
            // output statement contains something, add comma
            else {
                answer = `${answer}, ${amounts[i]} ${single[i]}`;
            }
        }
        // if result was greater than 1
        if (result[i] === 2) {
            // if output statement was still empty
            if (answer === "") {
                answer = `${amounts[i]} ${multi[i]}`;
            }
            // output statement contains something, add comma
            else {
                answer = `${answer}, ${amounts[i]} ${multi[i]}`;
            }
        }
    }

    // add original amount to output statement then return
    answer = `$${amount} ==> ${answer}`;
    return answer;
};

// identify if calculated result is 0, 1, or greater than 1
// utilized when creating output statement
const getResult = function determineCount(number) {
    if (number === 0) return 0;
    else if (number === 1) return 1;
    else return 2;
}

// Sample test cases
console.log(calculateChange(4.62));
// $4.62 ==> 4 dollars, 2 quarters, 1 dime, 2 pennies
console.log(calculateChange(0.16));
// $0.16 ==> 1 dime, 1 nickel, 1 penny
console.log(calculateChange(150.11));
// $150.11 ==> Error: the number is too large

// Add additional test cases here 
console.log(calculateChange(-12.50));   // test negative
console.log(calculateChange(0));        // test right below lowest
console.log(calculateChange(0.01));     // test lowest
console.log(calculateChange(1.41));     // test singles
console.log(calculateChange(9.99));     // test multiples
console.log(calculateChange(0.10));     // test individual
console.log(calculateChange(100));      // test highest
console.log(calculateChange(100.01));   // test right above highest