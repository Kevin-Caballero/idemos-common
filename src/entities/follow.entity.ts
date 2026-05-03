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
 * Relación de seguimiento entre un usuario y una iniciativa parlamentaria.
 * La restricción de unicidad (UQ_follows_user_initiative) impide duplicados;
 * el toggle en FollowsService consulta esta tabla para decidir si crear o eliminar la relación.
 */
@Entity("follows")
@Unique("UQ_follows_user_initiative", ["userId", "initiativeId"])
export class Follow {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ name: "user_id" })
  userId!: string;

  @ManyToOne(() => Initiative, { onDelete: "CASCADE" })
  @JoinColumn({ name: "initiative_id" })
  initiative!: Initiative;

  @Column({ name: "initiative_id" })
  initiativeId!: string;

  @CreateDateColumn({ name: "created_at", type: "timestamptz" })
  createdAt!: Date;
}
