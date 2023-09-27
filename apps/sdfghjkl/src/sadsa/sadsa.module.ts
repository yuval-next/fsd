import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SadsaModuleBase } from "./base/sadsa.module.base";
import { SadsaService } from "./sadsa.service";
import { SadsaController } from "./sadsa.controller";
import { SadsaResolver } from "./sadsa.resolver";

@Module({
  imports: [SadsaModuleBase, forwardRef(() => AuthModule)],
  controllers: [SadsaController],
  providers: [SadsaService, SadsaResolver],
  exports: [SadsaService],
})
export class SadsaModule {}
