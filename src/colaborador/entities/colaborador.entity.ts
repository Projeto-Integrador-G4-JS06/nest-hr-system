import { Transform, TransformFnParams } from 'class-transformer';
import { IsDecimal, IsNotEmpty, IsNumber, Min } from 'class-validator';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

// Define a entidade "Colaborador", mapeando para a tabela "tb_colaboradores"
@Entity({ name: 'tb_colaboradores' })
export class Colaborador {
  // Define a coluna "id" como chave primária gerada automaticamente
  @PrimaryGeneratedColumn()
  id: number;

  // Aplica validação para que a coluna não seja vazia
  // Remove espaços extras no valor (se houver)
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

  // Define a coluna "foto" (opcional), aplicando validação para que não seja vazia
  @Transform(({ value }: TransformFnParams) => value?.trim())
  @IsNotEmpty()
  @Column({ length: 5000, nullable: true })
  foto: string;

  // Define a coluna "salario", aplicando validações:
  // Deve ser um número, não pode ser vazio, e deve ser maior ou igual a 0
  // Converte strings para números (se necessário)
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

  // Coluna de atualização automática da data (manipulada pelo TypeORM)
  @UpdateDateColumn()
  data: Date;
}
