import { Column, Entity } from "typeorm";

@Entity()
export class ContactUs {
  @Column({ name: "first_name" })
  firstName: string;

  @Column({ name: "last_name" })
  lastName: string;

  @Column({ nullable: true })
  location: string;

  @Column()
  email: string;

  @Column({ name: "phone_number", nullable: true })
  phoneNumber: number;

  @Column({ nullable: true })
  subject: string;

  @Column()
  message: string;
}
