const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routers = require('./router');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/user', routers);

app.listen(3000, () => {
  console.log('listening on port 3000');
});
