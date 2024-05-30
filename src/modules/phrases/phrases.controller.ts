import { ApiQuery, ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { PhrasesService } from './phrases.service';
import { Controller, Get, Query } from '@nestjs/common';

@ApiTags('phrase')
@Controller('phrase')
export class PhrasesController {
  constructor(private readonly phrasesService: PhrasesService) {}

  @Get()
  @ApiOperation({ summary: 'Search for phrases' })
  @ApiResponse({ status: 200, description: 'Return the search results for phrases.' })
  @ApiResponse({ status: 400, description: 'Invalid parameters.' })
  @ApiQuery({ name: 'searchTerm', required: true, description: 'The term to search for' })
  @ApiQuery({ name: 'orderField', required: false, description: 'The field to order by' })
  @ApiQuery({ name: 'orderType', required: false, enum: ['ASC', 'DESC'], description: 'The order type (ASC or DESC)' })
  @ApiQuery({ name: 'page', required: false, type: Number, description: 'The page number for pagination' })
  @ApiQuery({ name: 'limit', required: false, type: Number, description: 'The number of results per page' })
  async search(
    @Query('searchTerm') searchTerm: string,
    @Query('orderField') orderField: string = 'id',
    @Query('orderType') orderType: 'ASC' | 'DESC' = 'ASC',
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ) {
    return this.phrasesService.search(searchTerm, orderField, orderType, page, limit);
  }
}
