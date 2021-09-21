const mongoose = require('mongoose');
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
const db = process.env.mongoURI;

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
        console.log('CONNECTED TO MONGO...');
    } catch (err) {
        console.error(err.message);
        // Exit process with failure if connection fails
        process.exit(1);
    }
};

module.exports = connectDB;
