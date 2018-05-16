/**
 * Created by Ryan on 5/15/2018.
 */
let datetime = require('node-datetime');
/**
 * Gets the current date and time and append it to the return statement.
 * @params (string)
 */
module.exports = (string) => `${datetime.create().now()}: ${string}`;
