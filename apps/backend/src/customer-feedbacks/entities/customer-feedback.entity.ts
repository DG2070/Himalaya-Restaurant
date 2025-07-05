import { CommonEntity } from "src/common/entities/common.entity";
import { Column, Entity } from "typeorm";

@Entity()
export class CustomerFeedback extends CommonEntity {
  @Column()
  fullName: string;

  @Column()
  rating: number;

  @Column()
  message: string;

  @Column()
  role: string;

  @Column({ unique: true })
  imageURL: string;
}
