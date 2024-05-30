import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { VideoGamesService } from './video-games.service';
import { CreateVideoGameDto } from './dto/create-video-game.dto';
import { UpdateVideoGameDto } from './dto/update-video-game.dto';

@ApiTags('video-games')
@Controller('video-games')
export class VideoGamesController {
  constructor(private readonly videoGamesService: VideoGamesService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new video game' })
  @ApiResponse({ status: 201, description: 'The video game has been successfully created.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  @ApiBody({ type: CreateVideoGameDto })
  create(@Body() createVideoGameDto: CreateVideoGameDto) {
    return this.videoGamesService.create(createVideoGameDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all video games' })
  @ApiResponse({ status: 200, description: 'Return all video games.' })
  findAll() {
    return this.videoGamesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a video game by id' })
  @ApiResponse({ status: 200, description: 'Return a single video game.' })
  @ApiResponse({ status: 404, description: 'Video game not found.' })
  @ApiParam({ name: 'id', description: 'The ID of the video game to retrieve' })
  findOne(@Param('id') id: number) {
    return this.videoGamesService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a video game by id' })
  @ApiResponse({ status: 200, description: 'The video game has been successfully updated.' })
  @ApiResponse({ status: 404, description: 'Video game not found.' })
  @ApiBody({ type: UpdateVideoGameDto })
  @ApiParam({ name: 'id', description: 'The ID of the video game to update' })
  update(@Param('id') id: number, @Body() updateVideoGameDto: UpdateVideoGameDto) {
    return this.videoGamesService.update(+id, updateVideoGameDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a video game by id' })
  @ApiResponse({ status: 200, description: 'The video game has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Video game not found.' })
  @ApiParam({ name: 'id', description: 'The ID of the video game to delete' })
  remove(@Param('id') id: number) {
    return this.videoGamesService.remove(+id);
  }
}
