import { Injectable } from "@nestjs/common";
import { Colaborador } from "../entities/colaborador.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";


@Injectable()
export class ColaboradorService{

    constructor (
        @InjectRepository (Colaborador)
        private colaboradorRepository: Repository<Colaborador>
        
    ){}

    async findAll(): Promise<Colaborador[]>{
        return await this.colaboradorRepository.find();
    }
}