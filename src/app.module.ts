import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VideoGamesModule } from './modules/video-games/video-games.module';
import { PhrasesModule } from './modules/phrases/phrases.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      autoLoadEntities: true,
      synchronize: true,
      extra: {
        ssl: true,
      },
    }),
    PhrasesModule,
    VideoGamesModule,
  ],
})
export class AppModule {}
