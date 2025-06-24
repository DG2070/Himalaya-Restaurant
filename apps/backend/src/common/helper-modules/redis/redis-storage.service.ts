import {
  Inject,
  Injectable,
  OnApplicationBootstrap,
  OnApplicationShutdown,
} from "@nestjs/common";
import { ConfigType } from "@nestjs/config";
import Redis from "ioredis";
import {
  RedisInsertionException,
  RedisInValidationException,
  RedisValidationException,
  RedisValueFetchException,
} from "src/common/errors/redis-response.errors";
import { redisConfig } from "src/configurations/redis.config";

@Injectable()
export class RedisStorageService
  implements OnApplicationBootstrap, OnApplicationShutdown
{
  constructor(
    @Inject(redisConfig.KEY)
    private readonly redisConfiguration: ConfigType<typeof redisConfig>
  ) {}
  private redishClient: Redis;
  onApplicationBootstrap() {
    this.redishClient = new Redis({
      host: this.redisConfiguration.host,
      port: this.redisConfiguration.port,
    });
  }

  onApplicationShutdown(signal?: string) {
    return this.redishClient.quit();
  }

  async insert(keyPart: string, userId: number, value: string) {
    try {
      await this.redishClient.set(this.getKey(keyPart, userId), value);
      return;
    } catch (error) {
      throw new RedisInsertionException(`Error while inserting data in Redis.`);
    }
  }

  async getStoredValue(keyPart: string, userId: number) {
    try {
      const storedValue = await this.redishClient.get(
        this.getKey(keyPart, userId)
      );
      return storedValue;
    } catch (error) {
      throw new RedisValueFetchException(
        `Error while fetching stored value from Redis.`
      );
    }
  }

  async validate(keyPart: string, userId: number, value: string) {
    try {
      const storedValue = await this.redishClient.get(
        this.getKey(keyPart, userId)
      );
      return storedValue === value;
    } catch (error) {
      throw new RedisValidationException(
        `Error while validating data with that stored in Redis.`
      );
    }
  }

  async invalidate(keyPart: string, userId: number) {
    try {
      await this.redishClient.del(this.getKey(keyPart, userId));
      return;
    } catch (error) {
      throw new RedisInValidationException(
        `Error while invalidating used data.`
      );
    }
  }

  private getKey(keyPart: string, userId: number) {
    return `${keyPart}user-${userId}`;
  }
}
