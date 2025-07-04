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
import { ContactUsModule } from './contact-us/contact-us.module';

@Module({
  imports: [
    ConfigurationModule,
    DatabaseModule,
    RedisModule,
    MailingModule,
    HashingModule,
    PermissionModule,
    RoleModule,
    UserModule,
    AuthModule,
    FoodGroupsModule,
    FoodsModule,
    ContactUsModule,
  ],
  providers: [
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
