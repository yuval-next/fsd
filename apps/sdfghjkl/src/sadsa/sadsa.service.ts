import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SadsaServiceBase } from "./base/sadsa.service.base";

@Injectable()
export class SadsaService extends SadsaServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
