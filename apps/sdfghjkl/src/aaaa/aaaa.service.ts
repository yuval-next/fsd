import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AaaaServiceBase } from "./base/aaaa.service.base";

@Injectable()
export class AaaaService extends AaaaServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
