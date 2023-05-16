const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reserveSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    numbers: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    Message: {
        type: String
    }
});

const Reserve = mongoose.model("Reserve", reserveSchema);
module.exports = Reserve;
