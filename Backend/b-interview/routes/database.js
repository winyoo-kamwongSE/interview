const { Client } = require('pg')

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'J061584082',
    port: 5432,
  })
  client.connect()
  client.query('SELECT * FROM test_user', (err, res) => {
    // console.log(res.rows)
  })
  client.query('SELECT * FROM news', (err, res) => {
    // console.log(res.rows)
  })
  module.exports = client;