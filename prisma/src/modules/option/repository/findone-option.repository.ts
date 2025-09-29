/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../../shared/databases/prisma.database";

@Injectable()
export class FindOneOptionRepository {
    constructor(private readonly prisma: PrismaService) { }

    async findone(id:string) {
        const option = await this.prisma.option.findUnique({ where: { id } });
        return option;
    }
}