import { EntitySchema, MixedList } from 'typeorm';

import Example from './example.entity';

// main file to import all entities in one time.
// if you will create entitiy, you can just add in this array

export const Entities: MixedList<Function | string | EntitySchema> = [Example];

export { Example };
