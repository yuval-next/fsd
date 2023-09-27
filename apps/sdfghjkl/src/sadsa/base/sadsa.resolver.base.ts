/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { DeleteSadsaArgs } from "./DeleteSadsaArgs";
import { SadsaCountArgs } from "./SadsaCountArgs";
import { SadsaFindManyArgs } from "./SadsaFindManyArgs";
import { SadsaFindUniqueArgs } from "./SadsaFindUniqueArgs";
import { Sadsa } from "./Sadsa";
import { SadsaService } from "../sadsa.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Sadsa)
export class SadsaResolverBase {
  constructor(
    protected readonly service: SadsaService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Sadsa",
    action: "read",
    possession: "any",
  })
  async _sadsasMeta(
    @graphql.Args() args: SadsaCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Sadsa])
  @nestAccessControl.UseRoles({
    resource: "Sadsa",
    action: "read",
    possession: "any",
  })
  async sadsas(@graphql.Args() args: SadsaFindManyArgs): Promise<Sadsa[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Sadsa, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Sadsa",
    action: "read",
    possession: "own",
  })
  async sadsa(
    @graphql.Args() args: SadsaFindUniqueArgs
  ): Promise<Sadsa | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Sadsa)
  @nestAccessControl.UseRoles({
    resource: "Sadsa",
    action: "delete",
    possession: "any",
  })
  async deleteSadsa(
    @graphql.Args() args: DeleteSadsaArgs
  ): Promise<Sadsa | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
