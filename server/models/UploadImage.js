const mongoose = require('mongoose');

// set user model

var imageSchema = new mongoose.Schema({
    id: {

        type: String,
    },
    name: {
        required: true,
        type: String, 
    },
    url: {
        required: true,
        type: String,
    },
    ISBN: {
    
        type: String,
    },
    delhash: {
 
        type: String,
    },
    username: {
      
        type: String,
    },

});
 
//Image is a model which has a schema imageSchema
const Image2 = mongoose.model("Image2", imageSchema);
module.exports = Image2; // allow public access