/**
 * Created by Ryan on 5/15/2018.
 */
let datetime = require('node-datetime');
/**
 * Gets the current date and time with a format of Y-m-d H:M:S and prepend it to the return statement.
 * @params (string)
 */
module.exports = (string) => `${datetime.create().format('Y-m-d H:M:S')}: ${string}`;
