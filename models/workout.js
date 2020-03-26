const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },

    exercises: [{
       type: {
        type: String,
        required: true
        },
        name: {
            type: String,
            required: true
        },
        duration: {
            type: Number,
            default: null
        },
        weight: {
            type: Number,
            default: null
        },
        reps: {
            type: Number,
            default: null
        },
        sets: {
            type: Number,
            default: null
        },
        distance: {
            type: Number,
            default: null
        }
    }]
})


const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;