/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/database/prisma.database";

@Injectable()
 export class ListScenarioRepository {
    constructor(private readonly prisma: PrismaService) {}

    async execute() {
         const scenario = await this.prisma.scenario.findMany();
         return scenario;
    }
 }