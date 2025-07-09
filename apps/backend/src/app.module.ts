import { Module, ValidationPipe } from "@nestjs/common";
import { AuthModule } from "./auth/auth.module";
import { HashingModule } from "./common/helper-modules/hashing/hashing.module";
import { RedisModule } from "./common/helper-modules/redis/redis.module";
import { ConfigurationModule } from "./configurations/configuration.module";
import { PermissionModule } from "./permission/permission.module";
import { APP_PIPE } from "@nestjs/core";
import { DatabaseModule } from "./database/database.module";
import { RoleModule } from "./role/role.module";
import { UserModule } from "./user/user.module";
import { MailingModule } from "./common/helper-modules/mailing/mailing.module";
import { FoodsModule } from "./foods/foods.module";
import { FoodGroupsModule } from "./food-groups/food-groups.module";
import { ContactUsModule } from "./contact-us/contact-us.module";
import { CustomerFeedbacksModule } from "./customer-feedbacks/customer-feedbacks.module";
import { CloudinaryModule } from "./common/helper-modules/cloudinary/cloudinary.module";
import { EventsModule } from "./events/events.module";
import { NullToEmptyStringPipe } from "./common/pipes/null-to-empty-string.pipe";

@Module({
  imports: [
    ConfigurationModule,
    DatabaseModule,
    RedisModule,
    MailingModule,
    CloudinaryModule,
    HashingModule,
    PermissionModule,
    RoleModule,
    UserModule,
    AuthModule,
    FoodGroupsModule,
    FoodsModule,
    ContactUsModule,
    CustomerFeedbacksModule,
    EventsModule,
  ],
  providers: [
    {
      provide: APP_PIPE,
      useClass: NullToEmptyStringPipe,
    },
    {
      provide: APP_PIPE,
      useFactory: () =>
        new ValidationPipe({
          transform: true,
          whitelist: true,
          forbidNonWhitelisted: true,
        }),
    },
  ],
})
export class AppModule {}
