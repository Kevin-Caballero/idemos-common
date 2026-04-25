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

export enum VoteChoice {
  SI = "SI",
  NO = "NO",
  ABST = "ABST",
}

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
