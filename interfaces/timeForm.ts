export default interface timeForm {
    _id: string;
    name: String,
    distance: number,
    unit: String,
    stroke: String,
    time: {
        minutes: number,
        seconds: number,
        miliseconds: number
    },
    age: number,
    date: { 
        month: number,
        day: number,
        year: number
    },
    meet: String
}