"use strict";
exports.__esModule = true;
var pg_1 = require("pg");
var connectionString1 = process.env.new_uri;
var pool = new pg_1.Pool({
    connectionString: connectionString1,
    ssl: { rejectUnauthorized: false }
});
var query = function (text, params) {
    return pool.query(text, params);
};
exports["default"] = query;
