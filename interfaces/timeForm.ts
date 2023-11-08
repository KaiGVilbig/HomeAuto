export default interface timeForm {
    _id: string;
    name: String,
    distance: Number,
    unit: String,
    stroke: String,
    time: {
        minutes: Number,
        seconds: Number,
        miliseconds: Number
    },
    age: Number,
    date: { 
        month: Number,
        day: Number,
        year: Number
    },
    meet: String
}