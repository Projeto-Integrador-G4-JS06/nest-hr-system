import { Body, Controller, Get, HttpCode, HttpStatus, Post,Param,ParseIntPipe, Delete, Put} from "@nestjs/common";
import { ColaboradorService } from "../services/colaborador.service";
import { Colaborador } from "../entities/colaborador.entity";


@Controller("/colaboradores")

export class ColaboradorController {

    constructor (private readonly colaboradorService: ColaboradorService){}
    
    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Colaborador[]>{
        return this.colaboradorService.findAll();

    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK) 
    findById(@Param('id', ParseIntPipe) id: number): Promise<Colaborador> {
        return  this.colaboradorService.findById(id);

    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() colaborador: Colaborador): Promise<Colaborador>{
        return this.colaboradorService.create(colaborador)
    }

    @Get('/cargo/:cargo')
    @HttpCode(HttpStatus.OK) 
    findByCargo(@Param('cargo') cargo: string): Promise<Colaborador[]> {
        return  this.colaboradorService.findByRole(cargo);
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() colaborador: Colaborador): Promise<Colaborador>{
        return this.colaboradorService.update(colaborador);
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.colaboradorService.delete(id);
    }



}
    
    


    
