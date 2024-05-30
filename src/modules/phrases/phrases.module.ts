import { Module } from '@nestjs/common';
import { PhrasesService } from './phrases.service';
import { PhrasesController } from './phrases.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Phrase } from './entities/phrase.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Phrase])],
  controllers: [PhrasesController],
  providers: [PhrasesService],
})
export class PhrasesModule {}
