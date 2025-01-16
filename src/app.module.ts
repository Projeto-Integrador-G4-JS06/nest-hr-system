import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { Colaborador } from './colaborador/entities/colaborador.entity';
import { ColaboradorController } from './colaborador/controllers/colaborador.controller';
import { ColaboradorModule } from './colaborador/colaborador.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_hr_system',
      entities: [Colaborador],
      synchronize: true,
      logging: true,
    }),
    ColaboradorModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
