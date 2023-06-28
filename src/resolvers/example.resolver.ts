import { Example } from '@/entity';
import { Query, Resolver } from 'type-graphql';

@Resolver()
export class ExampleResolver {
  @Query(() => [Example])
  example(): String {
    return 'Example String';
  }
}
