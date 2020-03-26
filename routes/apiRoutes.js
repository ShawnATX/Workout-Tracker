const db = require("../models/index");
const path = require("path");


module.exports = function(app) {

    
    //get all workouts
    app.get("/api/workouts/range", function(req, res) {
        db.Workout.find({}, function (err, docs) {
            if (err) throw err;
            res.json(docs);
        })
    });
    
    
    //get most recent workout
    app.get("/api/workouts/", function(req, res) {
        db.Workout.find({}, function (err, docs) {
            if (err) throw err;
            res.json(docs);
        })
      });

};