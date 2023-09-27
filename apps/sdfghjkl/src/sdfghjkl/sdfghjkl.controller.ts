import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SdfghjklService } from "./sdfghjkl.service";
import { SdfghjklControllerBase } from "./base/sdfghjkl.controller.base";

@swagger.ApiTags("sdfghjkls")
@common.Controller("sdfghjkls")
export class SdfghjklController extends SdfghjklControllerBase {
  constructor(
    protected readonly service: SdfghjklService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
