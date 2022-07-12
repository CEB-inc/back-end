const mongoose = require('mongoose')

// Connection to mongoose database, brian:brian is username:password
mongoose
  .connect(process.env.ATLAS_DB_URL)
  .then(() =>
    console.log(
      mongoose.connection.readyState == 1
        ? "Mongoose connected!"
        : "Mongoose Failed!"
    )
  )
  .catch((err) => console.log(err));

module.exports = mongoose