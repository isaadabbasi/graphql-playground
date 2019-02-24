const mongoose = require('mongoose');

const username = process.env.USERNAME;
const dbpass = process.env.DBPASS;

if(!username || !dbpass) 
  throw new Error('Must provide Username and dbpass to connect to database...');

mongoose.connect(`mongodb://${username}:${dbpass}@ds117158.mlab.com:17158/gql-ninja`);

mongoose.on('connect', () => {
  console.log('Database connection established...');
})