import { IsString, IsNotEmpty, IsNumber, IsOptional, Min, Max } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateVideoGameDto {
  @ApiProperty({
    description: 'The name of the video game',
    example: 'The Legend of Zelda',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'A brief description of the video game',
    example: 'An action-adventure game series created by Nintendo.',
  })
  @IsString()
  @IsNotEmpty()
  description: string;

  
  @ApiProperty({
    description: 'The rating of the video game (1-10)',
    example: 9,
  })
  @IsNumber()
  @Min(1)
  @Max(10)
  @IsNotEmpty()
  rating: number;

  @ApiProperty({
    description: 'A comment about the video game',
    example: 'A timeless classic!',
  })
  @IsString()
  @IsOptional()
  comment: string;
}
