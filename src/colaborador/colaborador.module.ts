import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Colaborador } from './entities/colaborador.entity';
import { ColaboradorController } from './controllers/colaborador.controller';
import { ColaboradorService } from './services/colaborador.service';

@Module({
  imports: [TypeOrmModule.forFeature([Colaborador])],
  controllers: [ColaboradorController],
  providers: [ColaboradorService],
  exports: [TypeOrmModule],
})
export class ColaboradorModule {}