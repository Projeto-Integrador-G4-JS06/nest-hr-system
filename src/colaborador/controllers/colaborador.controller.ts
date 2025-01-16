import { Body, Controller, Get, HttpCode, HttpStatus, Post,Param,ParseIntPipe} from "@nestjs/common";
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
    
    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() colaborador: Colaborador): Promise<Colaborador>{
        return this.colaboradorService.create(colaborador)
    }


    @Get('/:id')
    @HttpCode(HttpStatus.OK) 
    findById(@Param('id', ParseIntPipe) id: number): Promise<Colaborador> {
        return  this.colaboradorService.findById(id);

    }
}
