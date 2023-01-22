const { Pool } = require('pg')

const pool = new Pool({
  connectionString: 'postgres://hvxrivpl:sRxLOA159q0BFW4GSn13_FzVHYLEd_LQ@rajje.db.elephantsql.com/hvxrivpl'
})


const fetchData = async(SQL, ...params) => {
  const client = await pool.connect()
  try {
      const { rows } = await client.query(SQL, params.length ? params : null)
      return rows
  } finally {
      client.release()
  }
}

const fetchRow = async(SQL, ...params) => {
  const client = await pool.connect()
  try {
      const { rows: [ row ] } = await client.query(SQL, params.length ? params : null)
      return row
  } finally {
      client.release()
  }
}

module.exports = {
  fetchData,
  fetchRow
}