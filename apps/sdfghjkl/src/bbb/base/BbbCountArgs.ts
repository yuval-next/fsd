/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BbbWhereInput } from "./BbbWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class BbbCountArgs {
  @ApiProperty({
    required: false,
    type: () => BbbWhereInput,
  })
  @Field(() => BbbWhereInput, { nullable: true })
  @Type(() => BbbWhereInput)
  where?: BbbWhereInput;
}

export { BbbCountArgs as BbbCountArgs };
