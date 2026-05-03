import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import type { InitiativeStep } from "./initiative-step.entity";
import type { InitiativeLink } from "./initiative-link.entity";
import type { InitiativeSummary } from "./initiative-summary.entity";

/**
 * Tipos de iniciativa parlamentaria soportados.
 * Se mapean directamente desde el campo TIPO del open data del Congreso.
 */
export enum InitiativeType {
  Proyecto = "Proyecto",
  Proposicion = "Proposicion",
}

/**
 * Entidad principal que representa una iniciativa parlamentaria del Congreso de los Diputados.
 * Los datos proceden del open data de congreso.es y se actualizan diariamente mediante el ETL.
 * `expediente` es el identificador único externo y se usa como clave de upsert en la sincronización.
 * Las relaciones con steps, links y summary son lazy (eager: false) para evitar cargas
 * innecesarias en las consultas del feed paginado.
 */
@Entity("initiatives")
export class Initiative {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ default: "CONGRESO" })
  source!: string;

  @Column()
  legislature!: string;

  @Column({ type: "varchar" })
  type!: InitiativeType;

  @Column({ unique: true })
  expediente!: string;

  @Column({ type: "text" })
  title!: string;

  @Column()
  author!: string;

  @Column({ name: "procedure_type" })
  procedureType!: string;

  @Column({ name: "current_status" })
  currentStatus!: string;

  @Column({ type: "varchar", nullable: true })
  committee!: string | null;

  @Column({ name: "presented_at", type: "date" })
  presentedAt!: Date;

  @Column({ name: "qualified_at", type: "date", nullable: true })
  qualifiedAt!: Date | null;

  @Column({ name: "closed_at", type: "date", nullable: true })
  closedAt!: Date | null;

  @CreateDateColumn({ name: "created_at" })
  createdAt!: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt!: Date;

  @OneToMany("InitiativeStep", "initiative", { eager: false })
  steps!: InitiativeStep[];

  @OneToMany("InitiativeLink", "initiative", { eager: false })
  links!: InitiativeLink[];

  @OneToOne("InitiativeSummary", "initiative", { eager: false, nullable: true })
  summary!: InitiativeSummary | null;
}
