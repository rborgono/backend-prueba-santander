const mongoose = require('mongoose');

const dbConnection = async () => {

    try {
        await mongoose.connect(`${ process.env.DB_CNN }/${ process.env.DB_NAME }?${ process.env.DB_OPTIONS }`);
        console.log('DB online');
    } catch(error) {
        console.log(error);
        throw new Error('Error a la hora de iniciar la BD');
    }

};

module.exports = {
    dbConnection
};