import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Initiative } from "./initiative.entity";

/**
 * Stores the official parliamentary vote result for an initiative.
 * Not all initiatives have an official vote (e.g. those still in committee).
 * One record per initiative (OneToOne).
 */
@Entity("official_vote_results")
export class OfficialVoteResult {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @OneToOne(() => Initiative, { onDelete: "CASCADE" })
  @JoinColumn({ name: "initiative_id" })
  initiative!: Initiative;

  @Column({ name: "initiative_id" })
  initiativeId!: string;

  @Column({ name: "yes_count", type: "int", default: 0 })
  yesCount!: number;

  @Column({ name: "no_count", type: "int", default: 0 })
  noCount!: number;

  @Column({ name: "abstention_count", type: "int", default: 0 })
  abstentionCount!: number;

  /** Date of the official parliamentary vote */
  @Column({ name: "voted_at", type: "date", nullable: true })
  votedAt!: Date | null;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt!: Date;
}
