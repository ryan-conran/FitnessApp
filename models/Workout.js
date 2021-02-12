const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    exercises: [
        {type: mongoose.Schema.Types.ObjectId, ref: 'Exercise', require: false}
    ],
    day: {
        type: Date,
        default: () => new Date(),
      },
    totalDuration: {
        type: Number,
        required: true,
    }
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;