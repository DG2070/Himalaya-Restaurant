import { CommonEntity } from "src/common/entities/common.entity";
import { Food } from "src/foods/entities/food.entity";
import { Column, Entity, OneToMany } from "typeorm";

@Entity()
export class FoodGroup extends CommonEntity {
  @Column({ unique: true })
  name: string;

  @Column()
  description: string;

  @Column({ unique: true })
  displayOrder: number;

  @OneToMany(() => Food, (food) => food.foodGroup)
  foods: Food[];
}
