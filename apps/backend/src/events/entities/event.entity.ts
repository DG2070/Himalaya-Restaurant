import { CommonEntity } from "src/common/entities/common.entity";
import { Column, Entity, OneToMany } from "typeorm";
import { EventImageURL } from "./event-images.entity";

@Entity()
export class Event extends CommonEntity {
  @Column()
  title: string;

  @Column({ nullable: true })
  description: string;

  @Column({ name: "show_event", default: true })
  showEvent: boolean;

  @Column({ name: "featured_event", default: false })
  featuredEvent: boolean;

  @OneToMany(() => EventImageURL, (eventImageURL) => eventImageURL.event, {
    cascade: true,
  })
  imageURLs: EventImageURL[];
}
