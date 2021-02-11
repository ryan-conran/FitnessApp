const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    exercises: [
        {type: mongoose.Schema.Types.ObjectId, ref: 'Exercise', require: false}
    ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;