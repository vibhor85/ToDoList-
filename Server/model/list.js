var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const listSchema = new Schema({
    list: { type: "string", required: true },
    _id: mongoose.Schema.Types.ObjectId
});

module.exports = mongoose.model("List", listSchema);