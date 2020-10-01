const morgan = require('morgan');
const express = require('express');
//const main = require('./views/main')
const { addPage, editPage, main, userList, userPages, wikiPage } = require('./views');

// get the db module and then connect to the database
const { db, Page, User } = require('./models');
db.authenticate()
  .then(() => {
    console.log('connected to the database');
  })


const app = express();
app.use(morgan('dev'));
// For request parsing
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//maybe we need to add more static paths?
app.use(express.static('public'));




app.get('/', (req, res, next) => {
    console.log("Inside first get");
    const outputFromMain = main("");
    console.log(outputFromMain);
    //res.send("Hello World !!");
    res.send(outputFromMain);
})

const PORT = 3000;
const init = async () => {
    await db.sync();
    app.listen(PORT, ()=>{
        console.log("Listening on 3000. Bring it ON !!!");
    });
    
} ;

init();


