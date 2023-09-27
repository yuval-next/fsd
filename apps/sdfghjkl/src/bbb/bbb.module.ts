import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { BbbModuleBase } from "./base/bbb.module.base";
import { BbbService } from "./bbb.service";
import { BbbController } from "./bbb.controller";
import { BbbResolver } from "./bbb.resolver";

@Module({
  imports: [BbbModuleBase, forwardRef(() => AuthModule)],
  controllers: [BbbController],
  providers: [BbbService, BbbResolver],
  exports: [BbbService],
})
export class BbbModule {}
