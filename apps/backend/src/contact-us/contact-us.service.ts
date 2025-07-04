import { Injectable } from '@nestjs/common';
import { CreateContactUsDto } from './dto/create-contact-us.dto';
import { UpdateContactUsDto } from './dto/update-contact-us.dto';

@Injectable()
export class ContactUsService {
  create(createContactUsDto: CreateContactUsDto) {


//   quotaRepository

// [create-dto-instance]  createQuotaTypeDto

// [create-d-t-o]  CreateQuotaTypeDto

// [update-dto-instance]  updateQuotaTypeDto

// [update-d-t-o]  UpdateQuotaTypeDto

// [data-assigned-variable] quotaInstance

// <created-object-variable> quota

// <saved-data-variable> newQuota

// <updated-data-variable> updatedQuota

// <deleted-data-variable> deletedQuota

// <all-data-variable> quotas

// <message-variable-single> 

// <message-variable-plural>


constructor(
  @InjectRepository(ContactUs)
  private readonly [repository-instance]  : Repository<ContactUs>,
) {}
async create([create-dto-instance]:[create-d-t-o]) {
  const [data-assigned-variable] = Object.assign(new ContactUs(), [create-dto-instance]);
  const <created-object-variable> = this.[repository-instance].create([data-assigned-variable]);
  const [<saved-data-variable>, error] = await safeError(
    runInTransaction(async (queryRunner) => {
      return await queryRunner.manager.save(ContactUs, <created-object-variable>);
    }),
  );
  if (error) throw new InternalServerErrorException(`Error saving <message-variable-single>.`);
  return {
    success: true,
    message: `<message-variable-single> has been saved successfully.`,
  };
}
async findAll() {
  const [<all-data-variable>, error] = await safeError(
    this.[repository-instance] .find({
      select: ['id'], //mention what to select
    }),
  );
  if (error)
    throw new InternalServerErrorException(`Error while fetching <message-variable-plural>.`);
  return <all-data-variable>;
}
async findOne(id: number) {
  const [<created-object-variable> , error] = await safeError(
    this.[repository-instance] .findOne({
      select: [], //what to select
      where: { }, //search criteria
    }),
  );
  if (error)
    throw new InternalServerErrorException(`Error while fetching <message-variable-single>.`);
  if (!<created-object-variable>) throw new NotFoundException(`<message-variable-single> not found.`);
  return <created-object-variable>;
}

async update(id: number, [update-dto-instance]: [update-d-t-o]) {
  const <created-object-variable> = await this.findOne(id);
  Object.assign(<created-object-variable>, [update-dto-instance]);
  const [<updated-data-variable> , error] = await safeError(
    runInTransaction(async (queryRunner) => {
      return await queryRunner.manager.save(ContactUs, <created-object-variable>);
    }),
  );
  if (error) throw new InternalServerErrorException(`Error updating <message-variable-single>`);
  return {
    success: true,
    message: `<message-variable-single> updated successfully.`,
  };
}

async remove(id: number) {
  const <created-object-variable> = await this.findOne(id);
  const [<deleted-data-variable>, error] = await safeError(
    runInTransaction(async (queryRunner) => {
      return await queryRunner.manager.softRemove(ContactUs, <created-object-variable>);
    }),
  );
  if (error) throw new InternalServerErrorException(`Error deleting <message-variable-single>.`);
  return {
    success: true,
    message: `<message-variable-single> deleted successfully.`,
  };
}

}
