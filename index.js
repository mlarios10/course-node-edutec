'use strict'

var mongoose = require('mongoose');
var port = process.env.PORT || 3000;
var app = require('./app');

mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost:27017/zoo');
mongoose.connect('mongodb://mlarios11:electronica10@ds131971.mlab.com:31971/backend-2018');

app.listen(port);

console.log('backend is running');

   // .then(() => {
   //     console.log('La conexion a mongo a sido exitosa');
    //    app.listen(port, () => {
     //       console.log('El servidor local de node y express esta corriendo');
     //   });
    //})
    //.catch(err => console.log(err)nkk