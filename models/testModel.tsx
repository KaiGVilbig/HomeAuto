import {Schema, model, models} from 'mongoose';

const testSchema = new Schema({
    name: String,
    time: Number
})

const Test = models.Test || model('Test', testSchema)

export default Test