/**
 * Created by Ryan on 5/16/2018.
 */
/**
 * Adds up all the numbers from 1 to number. For example:
 * if the input is 4 then the  return is 10 because 1 + 2 + 3 + 4 = 10
 * @params (int)
 */
module.exports =  sumationNotation = number =>
    number - 1 > 0 ?
        number + sumationNotation(number - 1) : number;
