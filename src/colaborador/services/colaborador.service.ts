import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Colaborador } from '../entities/colaborador.entity';
import { DeleteResult, ILike, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
// Serviço para gerenciar a lógica de negócios relacionada aos "Colaboradores"
export class ColaboradorService {

  // Injeta o repositório de "Colaborador" do TypeORM
  constructor(
    @InjectRepository(Colaborador)
    private colaboradorRepository: Repository<Colaborador>
  ) {}

  // Busca todos os colaboradores
  async findAll(): Promise<Colaborador[]> {
    return this.colaboradorRepository.find();
  }

  // Busca um colaborador pelo ID
  async findById(id: number): Promise<Colaborador> {
    const colaborador = await this.colaboradorRepository.findOne({
      where: {
        id,
      },
    });

    // Lança uma exceção HTTP caso o colaborador não seja encontrado
    if (!colaborador)
      throw new HttpException(
        'Colaborador não encontrado',
        HttpStatus.NOT_FOUND,
      );

    return colaborador;
  }

  // Busca colaboradores pelo cargo, utilizando pesquisa parcial (ILike para case insensitive)
  async findByRole(cargo: string): Promise<Colaborador[]> {
    return this.colaboradorRepository.find({
        where: {
          cargo: ILike(`%${cargo}%`) // Busca por cargos que contenham o texto fornecido
        }
    });
  }

  // Cria um novo colaborador
  async create(colaborador: Colaborador): Promise<Colaborador> {
    return await this.colaboradorRepository.save(colaborador);
  }

  // Atualiza um colaborador existente
  async update(colaborador: Colaborador): Promise<Colaborador> {
    // Verifica se o colaborador existe antes de atualizar
    await this.findById(colaborador.id)
    return await this.colaboradorRepository.save(colaborador);
}

  // Deleta um colaborador pelo ID
  async delete(id: number): Promise<DeleteResult> {
    // Verifica se o colaborador existe antes de deletar
    await this.findById(id);
    return await this.colaboradorRepository.delete(id);
  }
}
