import { Entity, Column, PrimaryGeneratedColumn, Check } from 'typeorm';

@Entity({ name: 'video_games_samuelquisol' })
@Check(`"rating" >= 1 AND "rating" <= 10`)
export class VideoGame {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  rating: number;

  @Column()
  comment: string;
}