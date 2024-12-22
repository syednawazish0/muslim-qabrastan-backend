const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        const connect = await mongoose.connect(process.env.DB_HOST_URL);
        console.log(`Connected to Mongoose ${connect.connection.host}, ${connect.connection.name}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
    
}

module.exports = dbConnection;