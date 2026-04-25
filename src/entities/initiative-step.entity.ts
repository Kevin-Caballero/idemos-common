import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Initiative } from "./initiative.entity";

@Entity("initiative_steps")
export class InitiativeStep {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @ManyToOne(() => Initiative, (i) => i.steps, { onDelete: "CASCADE" })
  @JoinColumn({ name: "initiative_id" })
  initiative!: Initiative;

  @Column({ name: "initiative_id" })
  initiativeId!: string;

  @Column({ name: "step_type" })
  stepType!: string;

  @Column({ type: "text" })
  description!: string;

  @Column({ name: "start_date", type: "date", nullable: true })
  startDate!: Date | null;

  @Column({ name: "end_date", type: "date", nullable: true })
  endDate!: Date | null;

  @Column({ name: "order_index", type: "int" })
  orderIndex!: number;

  @CreateDateColumn({ name: "created_at" })
  createdAt!: Date;
}
