// all this server does is forward the ipfs code to the clients.

const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//app.use('/api/auth', authRouter); |||||EXAMPLE|||||

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;



/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening *** on port: ${PORT}`);
});
