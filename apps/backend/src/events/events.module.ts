import { Module } from "@nestjs/common";
import { EventsService } from "./events.service";
import { EventsController } from "./events.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Event } from "./entities/event.entity";
import { EventImageURL } from "./entities/event-images.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Event, EventImageURL])],
  controllers: [EventsController],
  providers: [EventsService],
})
export class EventsModule {}
