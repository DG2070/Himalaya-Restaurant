import { CommonEntity } from "src/common/entities/common.entity";
import { Column, Entity, ManyToOne } from "typeorm";
import { Event } from "./event.entity";

@Entity()
export class EventImageURL extends CommonEntity {
  @Column()
  imageURL: string;

  @ManyToOne(() => Event, (event) => event.imageURLs, { onDelete: "CASCADE" })
  event: Event;
}
