import { CommonEntity } from "src/common/entities/common.entity";
import { FoodGroup } from "src/food-groups/entities/food-group.entity";
import { Column, Entity, ManyToOne } from "typeorm";

@Entity()
export class Food extends CommonEntity {
  @Column({ unique: true })
  name: string;

  @Column({ name: "name_hk", unique: true })
  nameHK: string;

  @Column()
  description: string;

  @Column({ name: "price_hk_dollar" })
  priceHKDollar: number;

  @Column({ unique: true })
  imageURL: string;

  @Column({ name: "is_available", default: true })
  isAvailable: boolean;

  @Column({ name: "is_special_food", default: false })
  isSpecialFood: boolean;

  @Column({ name: "is_popular_food", default: false })
  isPopularFood: boolean;

  @ManyToOne(() => FoodGroup, (foodGroup) => foodGroup.foods)
  foodGroup: FoodGroup;
}
