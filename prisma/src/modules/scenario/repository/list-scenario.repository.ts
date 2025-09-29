/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { PrismaService } from "prisma/src/shared/databases/prisma.database";



@Injectable()
export class ListScenarioRepository{
     constructor(private readonly prisma: PrismaService) {}

     async list () {
        const scenario = await this.prisma.scenario.findMany()
            return scenario; 
        }   
}