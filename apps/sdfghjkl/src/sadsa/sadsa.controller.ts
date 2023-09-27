import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SadsaService } from "./sadsa.service";
import { SadsaControllerBase } from "./base/sadsa.controller.base";

@swagger.ApiTags("sadsas")
@common.Controller("sadsas")
export class SadsaController extends SadsaControllerBase {
  constructor(
    protected readonly service: SadsaService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
