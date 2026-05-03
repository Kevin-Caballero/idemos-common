import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from "typeorm";
import { Initiative } from "./initiative.entity";

/**
 * Opciones de voto ciudadano sobre una iniciativa parlamentaria.
 * Los valores (SI/NO/ABST) se usan tanto en la lógica de negocio como en las
 * consultas de estadísticas agrupadas por `choice`.
 */
export enum VoteChoice {
  SI = "SI",
  NO = "NO",
  ABST = "ABST",
}

/**
 * Voto ciudadano sobre una iniciativa parlamentaria.
 * La restricción de unicidad (UQ_votes_user_initiative) garantiza que
 * cada usuario solo tiene un voto activo por iniciativa; cambiar el voto
 * actualiza el registro existente en lugar de crear uno nuevo.
 */
@Entity("votes")
@Unique("UQ_votes_user_initiative", ["userId", "initiativeId"])
export class Vote {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ name: "user_id" })
  userId!: string;

  @ManyToOne(() => Initiative, { onDelete: "CASCADE" })
  @JoinColumn({ name: "initiative_id" })
  initiative!: Initiative;

  @Column({ name: "initiative_id" })
  initiativeId!: string;

  @Column({ type: "varchar" })
  choice!: VoteChoice;

  @CreateDateColumn({ name: "created_at" })
  createdAt!: Date;
}
