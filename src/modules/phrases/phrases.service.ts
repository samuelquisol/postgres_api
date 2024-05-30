import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ILike } from 'typeorm';
import { Phrase } from './entities/phrase.entity';

@Injectable()
export class PhrasesService {
  constructor(
    @InjectRepository(Phrase)
    private readonly phraseRepository: Repository<Phrase>,
  ) {}

  async search(
    searchTerm: string,
    orderField: string = 'id',
    orderType: 'ASC' | 'DESC' = 'ASC',
    page: number = 1,
    limit: number = 10,
  ) {
    const [results, total] = await this.phraseRepository.findAndCount({
      where: { text: ILike(`%${searchTerm}%`) },  // Búsqueda flexible usando ilike
      order: { [orderField]: orderType },  // Ordenamiento
      skip: (page - 1) * limit,  // Paginación
      take: limit,
    });

    return {
      data: results,
      total,
      page,
      lastPage: Math.ceil(total / limit),
    };
  }
}