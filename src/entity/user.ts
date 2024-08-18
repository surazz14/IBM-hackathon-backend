import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity
} from "typeorm";

export enum UserRole {
  ADMIN = "admin",
  Member = "member",
}

@Entity("users")
export class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  _id!: number;

  @Column({
    length: 100,
    default: "",
  })
  name?: string;

  @Column({
    length: 100,
    default: "",
  })
  email?: string;

  @Column({
    length: 100,
    default: "",
  })
  password!: string;

}
