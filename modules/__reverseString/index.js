/**
 * Created by Ryan on 5/16/2018.
 */
/**
 * Takes the string parameter being passed and return the string in reversed order.
 * @params (string)
 */

//Get each letters/characters from the sentence to an array then reverse the array
//Uses es6 [...string] spread operator
module.exports = string => [...string].reverse().join("");