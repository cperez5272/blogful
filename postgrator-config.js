require('dotenv').config();

module.exports = {
  "migrationsDirectory": "migrations",
  "driver": "pg",
  validateChecksums: false,
  "connectionString": (process.env.NODE_ENV === 'test')
  ? process.env.TEST_DB_URL
  : process.env.DB_URL,
}

// const postgrator = new Postgrator({
//   validateChecksums: true, // Set to false to skip validation
//   newline: 'CRLF' // Force using 'CRLF' (windows) or 'LF' (unix/mac)
// })

// module.exports = postgrator