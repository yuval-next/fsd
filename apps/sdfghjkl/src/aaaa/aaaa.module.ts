import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AaaaModuleBase } from "./base/aaaa.module.base";
import { AaaaService } from "./aaaa.service";
import { AaaaController } from "./aaaa.controller";
import { AaaaResolver } from "./aaaa.resolver";

@Module({
  imports: [AaaaModuleBase, forwardRef(() => AuthModule)],
  controllers: [AaaaController],
  providers: [AaaaService, AaaaResolver],
  exports: [AaaaService],
})
export class AaaaModule {}
