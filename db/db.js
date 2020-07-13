const Sequelize = require('sequelize')
const db = new Sequelize(
  // the address is how it knows which database to attach the models to
  process.env.DATABASE_URL || 'postgres://localhost:5432/study-saturdays', {
  logging: false
}
)

module.exports = db;
// ngrok: not actual deployment.  Better for short-term presentation; if you want people to have access to your local server.  Securely exposes a web server; easy to use and faster than heroku

// look at heroku docs and deploy.  Heroku is remote server.  For final product.
// hard to debug with deployment but good experience
// fitness tracker 2 has some heroku stuff
