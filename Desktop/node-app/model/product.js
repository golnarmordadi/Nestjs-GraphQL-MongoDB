const mongoose = require("mongoose");

let product = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Product name required']
    },
    age: { type: Number, required: [true, 'age required'] },
});
module.exports = mongoose.model("product", product);


