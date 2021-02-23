const express = require('express');
const router = express.Router();
//import sql connection
const connect = require("../config/sqlConfig");

//route handlers are like PHP functions
//get api "/", request response
router.get("/", (req, res) => {
    //res.json = echo json_encode(...) in PHP
    res.json({message: "you hit the api route"});
})

router.get("/users", (req, res) => {
    //get all movies from database
    //res.json({query result here});
    //echo a message just like PHP
    res.json({message: "all users route"});
})

router.get("/movies", (req, res) => {
    connect.getConnection(function(err, connection) {
        if (err) throw err; // not connected!
       
        // Use the connection
        connection.query('SELECT * FROM tbl_movies', function (error, results) {
          // When done with the connection, release it.
          connection.release();
       
          // Handle error after the release.
          if (error) throw error;
            
          //pass database query results
          res.json(results);
        });
    });
})

//dynamic route handler
//same as $_GET['id']
//DOESN'T work
router.get("/movies/:id", (req, res) => {
    connect.query(`SELECT * from tbl_movies WHERE id=${req.params.id}`, function (error, results, fields) {
        if (error) throw error;
        console.log("results: ", results, "fields:" ,fields);
        res.json(results);
    });
})

module.exports = router;