/**
 * Created by anakin on 5/15/2018.
 */
let datetime = require('node-datetime');
module.exports = (str) => `${datetime.create().now()}: ${str}`;