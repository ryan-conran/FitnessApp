var express = require('express');
const Exercise = require('../models/Exercise');
var router = express.Router();
var Workout = require('../models/Workout');

router.post('/workouts', async (req, res, next) => {
    try {
        await Workout.create({
            exercises: []
        });
    }
    catch(ex) {
        console.error(ex);
        return res.sendStatus(500);
    }

    res.sendStatus(200);
});

router.get('/workouts', async (req, res, next) => {
    let workouts = null;
    try {
        workouts = await Workout.find().populate("exercises");
    }
    catch(ex) {
        console.error(ex);
        return res.sendStatus(500);
    }

    res.send(workouts);
});

router.put('/workouts/:_id', async (req, res, next) => {
    if (req.params._id === "undefined") {
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
            //Still requires testing
            await Workout.findByIdAndUpdate(req.params._id,{
                $push: {exercises: req.body}
            });
        }
        catch(ex) {
            console.error(ex);
            return res.sendStatus(500);
        }
    }

    res.sendStatus(200);
});

module.exports = router;