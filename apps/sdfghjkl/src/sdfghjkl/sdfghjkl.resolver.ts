import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SdfghjklResolverBase } from "./base/sdfghjkl.resolver.base";
import { Sdfghjkl } from "./base/Sdfghjkl";
import { SdfghjklService } from "./sdfghjkl.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Sdfghjkl)
export class SdfghjklResolver extends SdfghjklResolverBase {
  constructor(
    protected readonly service: SdfghjklService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
