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

export enum InitiativeType {
  Proyecto = "Proyecto",
  Proposicion = "Proposicion",
}

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
