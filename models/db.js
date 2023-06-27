// Import the mongoose library
const mongoose = require('mongoose');
// Create a Schema object using the mongoose module
const Schema = mongoose.Schema;
// Create a Model object using the mongoose module
const Model = mongoose.model;

// Set the URI for the MongoDB database
const URI = 'mongodb+srv://trungtinlethai:210085.@simonwill.n4dqsyu.mongodb.net/';

// Connect to the MongoDB database using the mongoose.connect() method
mongoose.connect(URI, {useNewUrlParser: true});

// Define the schema for the "product" collection
const ProductSchema = new Schema({
    _id: String,
    ID: String,
    Product: String,
    Price: String,
    Description: String,
    img: String
});

// Create a model for the "product" collection using the ProductSchema
const Product = Model('Product', ProductSchema, 'product');

// Export the Product model so it can be used by other parts of the application
