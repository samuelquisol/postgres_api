import { Module } from '@nestjs/common';
import { VideoGamesService } from './video-games.service';
import { VideoGamesController } from './video-games.controller';
import { VideoGame } from './entities/video-game.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([VideoGame])],
  controllers: [VideoGamesController],
  providers: [VideoGamesService],
})
export class VideoGamesModule {}
