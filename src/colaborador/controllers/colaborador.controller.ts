import { Body, Controller, Get, HttpCode, HttpStatus, Post,Param,ParseIntPipe, Delete, Put} from "@nestjs/common";
import { ColaboradorService } from "../services/colaborador.service";
import { Colaborador } from "../entities/colaborador.entity";

// Define um controlador para gerenciar rotas relacionadas a "colaboradores"
@Controller("/colaboradores")

export class ColaboradorController {

    // Injeta o serviço de colaborador para lidar com lógica de negócios
    constructor (private readonly colaboradorService: ColaboradorService){}
    
    // Rota GET para buscar todos os colaboradores
    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Colaborador[]>{
        return this.colaboradorService.findAll();
    }

    // Rota GET para buscar um colaborador pelo ID
    @Get('/:id')
    @HttpCode(HttpStatus.OK) 
    findById(@Param('id', ParseIntPipe) id: number): Promise<Colaborador> {
        return  this.colaboradorService.findById(id);
    }

    // Rota GET para buscar colaboradores pelo cargo
    @Get('/cargo/:cargo')
    @HttpCode(HttpStatus.OK) 
    findByRole(@Param('cargo') cargo: string): Promise<Colaborador[]> {
        return  this.colaboradorService.findByRole(cargo);
    }

    // Rota POST para criar um novo colaborador
    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() colaborador: Colaborador): Promise<Colaborador>{
        return this.colaboradorService.create(colaborador)
    }

    // Rota PUT para atualizar um colaborador existente
    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() colaborador: Colaborador): Promise<Colaborador>{
        return this.colaboradorService.update(colaborador);
    }

    // Rota DELETE para remover um colaborador pelo ID
    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.colaboradorService.delete(id);
    }

}