import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VideoGame } from './entities/video-game.entity';
import { CreateVideoGameDto } from './dto/create-video-game.dto';
import { UpdateVideoGameDto } from './dto/update-video-game.dto';

@Injectable()
export class VideoGamesService {
  constructor(
    @InjectRepository(VideoGame)
    private readonly videoGameRepository: Repository<VideoGame>,
  ) {}

  async findAll(): Promise<VideoGame[]> {
    return await this.videoGameRepository.find();
  }

  async findOne(id: number): Promise<VideoGame> {
    return await this.videoGameRepository.findOneBy({ id });
  }

  async create(createVideoGameDto: CreateVideoGameDto): Promise<VideoGame> {
    const videoGame = new VideoGame();
    Object.assign(videoGame, createVideoGameDto);
    return await this.videoGameRepository.save(videoGame);
  }

  async update(id: number, updateVideoGameDto: UpdateVideoGameDto): Promise<VideoGame> {
    const videoGame = await this.videoGameRepository.findOneBy({ id });
    if (!videoGame) {
      throw new Error('Video game not found');
    }
    Object.assign(videoGame, updateVideoGameDto);
    return await this.videoGameRepository.save(videoGame);
  }

  async remove(id: number): Promise<void> {
    await this.videoGameRepository.delete(id);
  }
}
