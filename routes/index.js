const express = require('express');
const router = express.Router();
const connect = require("../config/sqlConfig");
const path = require('path');

//ROUTE
router.get('/', (req, res) =>{
    //res.render('index', { message: "TESTING HANDLEBAR" })
    res.json({message: "you hit the api route"});
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

//hbs
router.get('/parentsmovie', (req, res) =>{
    res.render('movieindex');
})

//MEDIAS API
//connect to parents database
router.get("/moviesparent", (req, res) => {
    connect.getConnection(function(err, connection) {
        if (err) throw err; // not connected!
        connection.query('SELECT * FROM parents_movies', function (error, results) {
          connection.release();
          if (error) throw error;
          res.json(results);
        });
    });
})


router.get("/moviesparent/:id", (req, res) => {
    connect.query(`SELECT * from parents_movies WHERE movie_id=${req.params.id}`, function (error, results, fields) {
      if (error) throw error;
      console.log("results:", results, "fields:", fields);
      res.json(results);
    });
})

module.exports = router;