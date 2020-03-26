const db = require("../models/index");
const path = require("path");


module.exports = (app) => {
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
   
    //add new workout
    app.post("/api/workouts", function(req, res) {
        db.Workout.create({})
        .then((workout) => {
            res.json(workout);
        })
        .catch((err) => {
            console.log(err);
        })
    });

    //add exercise to workout
    app.put("/api/workouts/:id", function(req, res) {
        const workoutId = req.params.id;
        const exerciseData = req.body;
        console.log(exerciseData.duration);

        //get current total duration
        let currentDuration = 0;
        db.Workout.find({_id: workoutId}).then((workout) => {
            currentDuration = workout[0].totalDuration
        });
        
        db.Workout.findOneAndUpdate({_id: workoutId}, {
            $push: {exercises: exerciseData},
            totalDuration: (currentDuration + exerciseData.duration)
        }, 
        {new: true})
        .then((dbResponse) => {
            res.json(dbResponse);
        })
      });

};