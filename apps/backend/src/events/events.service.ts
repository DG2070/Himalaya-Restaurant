import {
  BadRequestException,
  ConflictException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from "@nestjs/common";
import { Event } from "./entities/event.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateEventDto } from "./dto/create-event.dto";
import { safeError } from "src/common/helper-functions/safe-error.helper";
import { runInTransaction } from "src/common/helper-functions/transaction.helper";
import { UpdateEventDto } from "./dto/update-event.dto";
import { omit } from "lodash";
import { EventImageURL } from "./entities/event-images.entity";

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(Event)
    private readonly eventRepository: Repository<Event>
  ) {}
  async create(createEventDto: CreateEventDto) {
    const eventInstance = Object.assign(new Event(), {
      ...omit(createEventDto, "imageURLs"),
    });

    eventInstance.imageURLs = createEventDto.imageURLs.map((imageURL) => {
      const imageURLInstance = Object.assign(new EventImageURL(), { imageURL });
      return imageURLInstance;
    });

    const event = this.eventRepository.create(eventInstance);
    const [newEvent, error] = await safeError(
      runInTransaction(async (queryRunner) => {
        return await queryRunner.manager.save(Event, event);
      })
    );
    if (error) {
      throw new InternalServerErrorException(
        `Error saving Event and its associated images.`
      );
    }

    return {
      success: true,
      message: `Event and associated images has been saved successfully.`,
    };
  }

  async findAll() {
    const [events, error] = await safeError(
      this.eventRepository
        .createQueryBuilder("event")
        .leftJoin("event.imageURLs", "imageURL")
        .select([
          "event.id",
          "event.title",
          "event.description",
          "imageURL.id",
          "imageURL.imageURL",
        ])
        .getMany()
    );
    if (error)
      throw new InternalServerErrorException(`Error while fetching Events.`);
    return events;
  }

  async findOne(id: number) {
    const [event, error] = await safeError(
      this.eventRepository
        .createQueryBuilder("event")
        .leftJoin("event.imageURLs", "imageURL")
        .select([
          "event.id",
          "event.title",
          "event.description",
          "imageURL.id",
          "imageURL.imageURL",
        ])
        .where("event.id = :id", { id })
        .getOne()
    );
    if (error)
      throw new InternalServerErrorException(`Error while fetching Event.`);
    if (!event) throw new NotFoundException(`Event not found.`);
    return event;
  }

  async update(id: number, updateEventDto: UpdateEventDto) {
    const event = await this.findOne(id);

    Object.assign(event, {
      ...omit(updateEventDto, "imageURLs"),
    });

    if (updateEventDto.imageURLs) {
      event.imageURLs = updateEventDto.imageURLs.map((imageURL) => {
        const imageURLInstance = Object.assign(new EventImageURL(), {
          imageURL,
        });
        return imageURLInstance;
      });
    } else {
      throw new BadRequestException(
        `You need to add at least one image to the event.`
      );
    }

    const [updatedEvent, error] = await safeError(
      runInTransaction(async (queryRunner) => {
        return await queryRunner.manager.save(Event, event);
      })
    );
    if (error) {
      throw new InternalServerErrorException(
        `Error updating Event and associated image(s).`
      );
    }

    return {
      success: true,
      message: `Event and associated image(s) updated successfully.`,
    };
  }

  async remove(id: number) {
    const event = await this.findOne(id);
    const [deletedEvent, error] = await safeError(
      runInTransaction(async (queryRunner) => {
        return await queryRunner.manager.softRemove(Event, event);
      })
    );
    if (error) throw new InternalServerErrorException(`Error deleting Event.`);
    return {
      success: true,
      message: `Event deleted successfully.`,
    };
  }
}
