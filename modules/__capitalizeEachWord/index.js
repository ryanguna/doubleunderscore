/**
 * Created by Ryan on 5/16/2018.
 */
/**
 * Takes the string parameter being passed and capitalize the first letter of each word.
 * @params (string)
 */
module.exports = string => string.split(' ').map(char => char.charAt(0).toUpperCase() + char.substr(1)).join(' ');