// Setup connection with MongoDB
import mongoose from 'mongoose';

// change according to your databse PATH/URL
mongoose.connect(
    "mongodb://localhost:27017/users", {
        useCreateIndex: true, // The index stores the value of a specific field or set of fields, ordered by the value of the field.
        useNewUrlParser: true, // 
        useUnifiedTopology: true,
    }
).then(() => {
    console.log("Connected to database!");
}).catch(() => {
    console.log("Connection Failed!");
});