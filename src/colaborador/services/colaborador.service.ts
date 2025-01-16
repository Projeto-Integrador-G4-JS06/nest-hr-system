import { Injectable } from '@nestjs/common';
import { Colaborador } from '../entities/colaborador.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ColaboradorService {
  constructor(
    @InjectRepository(Colaborador)
    private colaboradorRepository: Repository<Colaborador>,
    private colaboradorService: ColaboradorService,
  ) {}

  async findAll(): Promise<Colaborador[]> {
    return await this.colaboradorRepository.find();
  }

  async create(colaborador: Colaborador): Promise<Colaborador> {
    await this.colaboradorService.findById(colaborador.id);
    return await this.colaboradorRepository.save(colaborador) 
  }
}
