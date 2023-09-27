import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AaaaService } from "./aaaa.service";
import { AaaaControllerBase } from "./base/aaaa.controller.base";

@swagger.ApiTags("aaaas")
@common.Controller("aaaas")
export class AaaaController extends AaaaControllerBase {
  constructor(
    protected readonly service: AaaaService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
