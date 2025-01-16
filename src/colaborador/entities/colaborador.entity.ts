import { Transform, TransformFnParams } from 'class-transformer';
import { IsDecimal, IsNotEmpty, IsNumber, Min } from 'class-validator';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'tb_colaboradores' })
export class Colaborador {
  @PrimaryGeneratedColumn()
  id: number;

  @Transform(({ value }: TransformFnParams) => value?.trim())
  @IsNotEmpty()
  @Column({ length: 14, nullable: false })
  cpf: string;

  @Transform(({ value }: TransformFnParams) => value?.trim())
  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  nome: string;

  @Transform(({ value }: TransformFnParams) => value?.trim())
  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  cargo: string;

  @Transform(({ value }: TransformFnParams) => value?.trim())
  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  email: string;

  @Transform(({ value }: TransformFnParams) => value?.trim())
  @IsNotEmpty()
  @Column({ length: 5000, nullable: true })
  foto: string;

  @Transform(({ value }: { value: string }) => parseFloat(value)) // Converte string para número, caso necessário
  @IsNotEmpty()
  @IsNumber() // Validação: deve ser um número
  @Min(0) // Validação: não pode ser menor que 0
  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  salario: number;

  @Transform(({ value }: TransformFnParams) => value?.trim())
  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  data_nascimento: string;

  @Transform(({ value }: TransformFnParams) => value?.trim())
  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  data_contratacao: string;

  @UpdateDateColumn()
  data: Date;
}
