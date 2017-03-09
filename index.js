"use strict";
const express = require('express');
const app = express();
app.use(express.static('.'));

app.listen(3000, () => {
  console.log('ES6 Generators - http://localhost:3000');
});