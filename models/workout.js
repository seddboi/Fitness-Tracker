const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newSchema = new Schema({
    day: {
        type: Date,
        default: Date.now,
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: 'Please enter an exercise type.',
            },
            name: {
                type: String,
                trim: true,
                required: 'Please enter the exercise name. ',
            },
            duration: {
                type: Number,
                trim: true,
                required: 'Please enter the exercise duration. ',
            },
            weight: {
                type: Number,
                default: 0,
                required: 'Please enter the weight to use. ',
            },
            reps: {
                type: Number,
                default: 0,
                required: 'Please enter how many reps. ',
            },
            sets: {
                type: Number,
                default: 0,
                required: 'Please enter how many sets. ',
            },
            distance: {
                type: Number,
                default: 0,
                required: 'Please enter the distance. ',
            },
        }
    ],
    totalDuration: {
        type: Number,
        default: 0,
    }
});

const workout = mongoose.model('workout', newSchema);

module.exports = workout;