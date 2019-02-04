'use strict'
var app = require('./app');
var puerto = 3700;


app.listen(puerto,()=>{
  console.log("Servidor corriendo perfectamente => localhost:3700");
});
