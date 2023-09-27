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
import { DeleteSdfghjklArgs } from "./DeleteSdfghjklArgs";
import { SdfghjklCountArgs } from "./SdfghjklCountArgs";
import { SdfghjklFindManyArgs } from "./SdfghjklFindManyArgs";
import { SdfghjklFindUniqueArgs } from "./SdfghjklFindUniqueArgs";
import { Sdfghjkl } from "./Sdfghjkl";
import { SdfghjklService } from "../sdfghjkl.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Sdfghjkl)
export class SdfghjklResolverBase {
  constructor(
    protected readonly service: SdfghjklService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Sdfghjkl",
    action: "read",
    possession: "any",
  })
  async _sdfghjklsMeta(
    @graphql.Args() args: SdfghjklCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Sdfghjkl])
  @nestAccessControl.UseRoles({
    resource: "Sdfghjkl",
    action: "read",
    possession: "any",
  })
  async sdfghjkls(
    @graphql.Args() args: SdfghjklFindManyArgs
  ): Promise<Sdfghjkl[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Sdfghjkl, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Sdfghjkl",
    action: "read",
    possession: "own",
  })
  async sdfghjkl(
    @graphql.Args() args: SdfghjklFindUniqueArgs
  ): Promise<Sdfghjkl | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Sdfghjkl)
  @nestAccessControl.UseRoles({
    resource: "Sdfghjkl",
    action: "delete",
    possession: "any",
  })
  async deleteSdfghjkl(
    @graphql.Args() args: DeleteSdfghjklArgs
  ): Promise<Sdfghjkl | null> {
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
