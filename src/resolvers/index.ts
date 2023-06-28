import { NonEmptyArray } from 'type-graphql';
import { ExampleResolver } from './example.resolver';

// main file to import all resolvers in one time.
// if you will create resolver, you can just add into this array

export const Resolvers: NonEmptyArray<Function> | NonEmptyArray<string> = [
  ExampleResolver,
];
