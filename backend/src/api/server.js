const app = require('./app');

const port = process.env.PORT || 5000;

const dbo = require('../models/connection');
 
app.listen(port, () => {
  dbo.connection(function (err) {
    if (err) console.error(err);
  });
  console.log(`Server is running on port: ${port}`);
});