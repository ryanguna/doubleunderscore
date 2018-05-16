/**
 * Created by Ryan on 5/16/2018.
 */
/**
 * Takes the number parameter being passed and returns the factorial of it
 * (e.g. if num = 4, return (4 * 3 * 2 * 1))
 * @params (int)
 */
module.exports = factorial = number =>
    number - 1 > 0 ?
        number * factorial(number - 1) : number;