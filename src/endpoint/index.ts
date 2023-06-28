import { Router } from 'express';

// endpoints
import { Example } from './example.endpoint';

// main file to import all endpoints in one time.
// if you will create new endpoint, you can just add below Endpoints variable

// guide: https://expressjs.com/en/4x/api.html#router

export const Endpoints = Router();

// https://expressjs.com/en/4x/api.html#app.get
// Endpoints.get('/', NewEndpoint);

// https://expressjs.com/en/4x/api.html#app.post.method
// Endpoints.post('/', NewEndpoint);

// https://expressjs.com/en/4x/api.html#app.put.method
// Endpoints.put('/', NewEndpoint);

// https://expressjs.com/en/4x/api.html#app.delete.method
// Endpoints.delete('/', NewEndpoint);

Endpoints.get('/example', Example);
