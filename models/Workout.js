const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
   exercises: [{
    type: {
        type: String,
        enum: ["resistance", "cardio"],
        default: "resistance"
    },
    name: {
        type: String,
        required: true
    },
    weight: {
        type: Number,
        required: () => {
            return this.type == "resistance";
        }
    },
    sets: {
        type: Number,
        required: () => {
            return this.type == "resistance";
        }
    },
    reps: {
        type: Number,
        required: () => {
            return this.type == "resistance";
        }
    },
    duration: {
        type: Number,
        required: true
        
    },
    distance: {
        type: Number,
        required: () => {
            return this.type == "cardio";
        }
    }    
   }]
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;
