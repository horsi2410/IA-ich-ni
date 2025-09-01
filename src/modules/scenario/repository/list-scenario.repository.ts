import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/database/prisma.database";

@Injectable ()
export class CreateScenarioRepository {
    constructor(private readonly prisma: PrismaService) {}

    async findAll () {
        const Scenario = await this.prisma.scenario.findMany
        return Scenario;
    }
}