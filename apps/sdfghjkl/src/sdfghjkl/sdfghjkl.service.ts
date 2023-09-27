import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SdfghjklServiceBase } from "./base/sdfghjkl.service.base";

@Injectable()
export class SdfghjklService extends SdfghjklServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
