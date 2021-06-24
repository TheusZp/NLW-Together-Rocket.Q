const sqlite3 = require("sqlite3")
const { open } = require("sqlite")
const { openDelimiter } = require("ejs")

module.exports = () =>
    open({
        filename: './src/db/rocketq.sqlite',
        driver: sqlite3.Database
    })
