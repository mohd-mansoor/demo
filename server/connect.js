const mongoose = require('mongoose')
const url ='mongodb+srv://void:dkoPjk9KSY2ew4oH@cluster0.pqjieot.mongodb.net/demo?retryWrites=true&w=majority&appName=Cluster0'

const connectDb = async () => {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('Connection error:', error.message);
    }
};

// Connection Events
mongoose.connection.on('connected', () => {
    console.log('Mongoose connected to DB.');
});

mongoose.connection.on('error', (err) => {
    console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
});

module.exports=connectDb