/* eslint-disable prettier/prettier */
import { Logger, Module } from '@nestjs/common';
import { ScoreService } from './score.service';
import { ScoreController } from './score.controller';
import * as UseCases from './use-cases';
import * as Repositories from './repository';
import { SharedModule } from 'prisma/src/shared/shared.module';

const useCases = Object.values(UseCases);
const repositories = Object.values(Repositories);

@Module({
  imports: [SharedModule],
  controllers: [ScoreController],
  providers: [ScoreService, ...useCases, ...repositories, Logger],
})
export class ScoreModule { }
