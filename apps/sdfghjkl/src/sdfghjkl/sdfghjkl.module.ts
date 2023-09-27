import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SdfghjklModuleBase } from "./base/sdfghjkl.module.base";
import { SdfghjklService } from "./sdfghjkl.service";
import { SdfghjklController } from "./sdfghjkl.controller";
import { SdfghjklResolver } from "./sdfghjkl.resolver";

@Module({
  imports: [SdfghjklModuleBase, forwardRef(() => AuthModule)],
  controllers: [SdfghjklController],
  providers: [SdfghjklService, SdfghjklResolver],
  exports: [SdfghjklService],
})
export class SdfghjklModule {}
