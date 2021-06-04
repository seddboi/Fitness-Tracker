const workoutJCole = require('../public/workout');
const router = require('express').Router();

// collect all workouts
router.get('/api/workouts', (req, res) => {
    workoutJCole.Workout.find({}).then(dbWorkouts => {
        dbWorkouts.forEach((exercise) => {
            let x = 0;

            exercise.exercises.forEach( (y) => {
                x += y.duration;
            });

            exercise.totalDuration = x;
        });
        
        res.json(dbWorkouts)
    }).catch( (err) => {
        res.status(500).json(err);
    })
});

// collect all workouts within a range
router.get('/api/workouts/range', (req, res) => {
    workoutJCole.Workout.find({}).then((dbWorkouts) => {
        res.json(dbWorkouts);
    }).catch( (err) => {
        res.status(500).json(err);
    });
});

// 'add an exercise' route
router.post('/api/workout', (req, res) => {
    workoutJCole.Workout.findOneAndUpdate(
        {
            _id: req.params.id
        },
        {
            $inc: {
                totalDuration: req.body.duration,
            },
            $push: {
                exercises: req.body,
            }
        },
        {
            new: true,
        })
    .then( (dbWorkouts) => {
        res.json(dbWorkouts);
    }).catch( (err) => {
        res.status(500).json(err);
    });
});

// 'create a full workout' route
router.post('.api/workouts', ( {body}, res) => {
    workoutJCole.Workout.create(body).then ( (dbWorkouts) => {
        res.json(dbWorkouts);
    }).catch( (err) => {
        res.status(500).json(err);
    });
});

module.exports = router;