const mongoose = require("mongoose")
const connect = () => {
    return mongoose.connect("mongodb+srv://shubham:shubham@cluster0.ulyvwpc.mongodb.net/?retryWrites=true&w=majority")
}
module.exports = connect