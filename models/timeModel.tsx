import {Schema, model, models} from 'mongoose';

const timeSchema = new Schema({
    name: { type: String, required: true },
    distance: { type: Number, required: true },
    unit: { type: String, required: true },
    stroke: { type: String, required: true },
    time: {
        minutes: { type: Number, min: 0, max: 59, required: true },
        seconds: { type: Number, min: 0, max: 59, required: true },
        miliseconds: { type: Number, min: 0, max: 99, required: true }
    },
    age: { type: Number, required: true },
    date: { 
        month: { type: Number, min: 1, max: 12, required: true },
        day: { type: Number, min: 1, max: 31, rquired: true },
        year: { type: Number, required: true }
    },
    meet: { type: String, required: false }
})

const Time = models.Time || model('Time', timeSchema)

export default Time