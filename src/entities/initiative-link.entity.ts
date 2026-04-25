export enum LinkType {
  BOCG = "BOCG",
  DS = "DS",
  OTHER = "OTHER",
}

import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Initiative } from "./initiative.entity";

@Entity("initiative_links")
export class InitiativeLink {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @ManyToOne(() => Initiative, (i) => i.links, { onDelete: "CASCADE" })
  @JoinColumn({ name: "initiative_id" })
  initiative!: Initiative;

  @Column({ name: "initiative_id" })
  initiativeId!: string;

  @Column({ name: "link_type", type: "varchar" })
  linkType!: LinkType;

  @Column({ type: "text" })
  url!: string;

  @Column({ type: "varchar", nullable: true })
  label!: string | null;

  @CreateDateColumn({ name: "created_at" })
  createdAt!: Date;
}
