const express = require('express');
const router = express.Router();
const connect = require("../config/sqlConfig");
const path = require('path');

//hbs
router.get('/parentsmovie', (req, res) =>{
    res.render('movieindex');
})

router.get('/parentstv', (req, res) =>{
    res.render('tvindex');
})

router.get('/parentsmusic', (req, res) =>{
    res.render('musicindex');
})

//pages
router.get('/', (req, res) =>{
    //this is the index
    res.sendFile(path.join(__dirname, "signin.html"));
})

router.get('/profile', (req, res) =>{
    //res.sendFile(path.join(__dirname, "profile.html"));
    res.render('chooseusers');
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
        connection.query('SELECT * FROM parents_movies', function (error, results) {
          connection.release();
          if (error) throw error;
          res.json(results);
        });
    });
})

router.get("/tvs", (req, res) => {
    connect.getConnection(function(err, connection) {
        if (err) throw err; // not connected!
        connection.query('SELECT * FROM parents_tv', function (error, results) {
          connection.release();
          if (error) throw error;
          res.json(results);
        });
    });
})

router.get("/audios", (req, res) => {
    connect.getConnection(function(err, connection) {
        if (err) throw err; // not connected!
        connection.query('SELECT * FROM parents_audio', function (error, results) {
          connection.release();
          if (error) throw error;
          res.json(results);
        });
    });
})

//connect to users
router.get("/getusers", (req, res) => {
    connect.getConnection(function(err, connection) {
        if (err) throw err; 
        connection.query('SELECT user_id, user_admin, user_access, user_avatar FROM tbl_user', function (error, results) {
          connection.release();
          if (error) throw error;
          res.json(results);
        });
    });
})


module.exports = router;