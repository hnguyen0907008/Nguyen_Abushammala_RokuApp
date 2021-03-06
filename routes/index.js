const express = require('express');
const router = express.Router();
const connect = require("../config/sqlConfig");
const path = require('path');


router.get('/', (req, res) =>{
    res.render('index', { message: "TESTING HANDLEBAR" })
})

router.get('/signin', (req, res) =>{
    res.sendFile(path.join(__dirname, "signin.html"));
})

router.get('/profile', (req, res) =>{
    res.sendFile(path.join(__dirname, "profile.html"));
})

router.get('/looking', (req, res) =>{
    res.sendFile(path.join(__dirname, "looking.html"));
})

//end

//connect to parents database
router.get("/movies", (req, res) => {
    connect.getConnection(function(err, connection) {
        if (err) throw err; // not connected!
       
        // Use the connection
        connection.query('SELECT * FROM parents_video', function (error, results) {
          connection.release();
          if (error) throw error;
          res.json(results);
        });
    });
})

module.exports = router;