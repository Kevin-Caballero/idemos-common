import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Initiative } from "./initiative.entity";

@Entity("initiative_summaries")
export class InitiativeSummary {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @OneToOne(() => Initiative, (i) => i.summary, { onDelete: "CASCADE" })
  @JoinColumn({ name: "initiative_id" })
  initiative!: Initiative;

  @Column({ name: "initiative_id" })
  initiativeId!: string;

  @Column({ type: "text" })
  content!: string;

  @Column({ type: "varchar", default: "gpt-4o-mini" })
  model!: string;

  @CreateDateColumn({ name: "created_at" })
  createdAt!: Date;
}
