//set up APP
//connect with backend
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

//catch every route request - everytime you change location bar, this function reacts and intercepts the route request
app.use((req, res, next) => {  
    console.log('incoming request');
    console.log(process.env.PORT);
    //console.log(process.env.NICKNAME);
    next(); // => send the user to the route they requested
});

//use api route to handle api routes - look into that folder
app.use("/api", require("./routes/api"));

app.listen(port, () => {
    console.log(`server is running on ${port}`);
});



//
