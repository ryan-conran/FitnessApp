var express = require('express');
// const Exercise = require('../models/Workout');
var router = express.Router();
var Workout = require('../models/Workout2');
var mongoose = require('mongoose');

router.post('/workouts', async (req, res, next) => {
    let workout = null;
    try {
        workout = await Workout.create({
            exercises: []
        });
    }
    catch(ex) {
        console.error(ex);
        return res.sendStatus(500);
    }

    res.send(workout);
});

router.get('/workouts', async (req, res, next) => {
    let workouts = null;
    try {
        workouts = await Workout.find()
        // .populate("exercises");
    }
    catch(ex) {
        console.error(ex);
        return res.sendStatus(500);
    }

    res.send(workouts);
});

router.put('/workouts/:workoutId', async (req, res, next) => {
    console.log("workoutId:",req.params.workoutId, !!req.params.workoutId );
    console.log(req.body)
    if (req.params.workoutId === "undefined") {
        try {
            const ex = await Exercise.create(req.body);

            await Workout.create({
                exercises: [ex._id]
            });
        }
        catch(ex) {
            console.error(ex);
            return res.sendStatus(500);
        }
    } else {
        try {
            // const ex = await Exercise.create(req.body);

            await Workout.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.workoutId),{
                $push: {exercises: req.body}
            });

            return res.send(ex);
        }
        catch(ex) {
            console.error(ex);
            return res.sendStatus(500);
        }
    }

    res.sendStatus(200);
});

router.get('api/workouts/range', async (req, res, next) => {
    
    try {
        workouts = await Workout.find({}).limit(7);
    }
    catch(ex) {
        console.error(ex);
        return res.sendStatus(500);
    }

    res.send(workouts);
})

module.exports = router;