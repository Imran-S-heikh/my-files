const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Tour   = require('./../../models/tour.model');
const fs = require('fs');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => console.log('DB conntection establish'));


const tours = JSON.parse(fs.readFileSync(`${__dirname}/tours-simple.json`,'utf-8'));

const importData = async () =>{
    try {
        await Tour.create(tours);
        console.log('Data added Successfully');
    } catch (error) {
        console.log(error);
    }
    process.exit();
};

const deleteData = async () =>{
    try {
        await Tour.deleteMany();
        console.log('Data deleted Successfully');
    } catch (error) {
        console.log(error);
    }
    process.exit();
}

if (process.argv[2] === '--import') {
    importData();
}else if(process.argv[2] === '--delete'){
    deleteData();
}