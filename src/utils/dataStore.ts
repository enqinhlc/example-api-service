import { Datastore } from '@google-cloud/datastore';
import path from 'path';
// import { DATASTORE } from '../config/constants';

const dataStore = new Datastore({
  projectId: process.env.PROJECT_ID,
  keyFilename: path.join(__dirname, '../service_key/firebase-service-key.json'),
});

export default dataStore;
