import { Field, Int, ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// create the database model & graphql model
// if it includes @Column, it is for the database
// if it includes @Field, it is for the graphql
// @Column and @Field can be combined
// check typeorm @ https://github.com/typeorm/typeorm

@Entity()
@ObjectType()
class Example extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: string;

  @Column({ type: 'varchar' })
  @Field(() => String, {
    nullable: true,
    defaultValue: 'example-default-value',
  })
  value: string;
}

export default Example;
