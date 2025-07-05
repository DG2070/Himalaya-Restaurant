import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from "@nestjs/common";
import { CreateContactUsDto } from "./dto/create-contact-us.dto";
import { Repository } from "typeorm";
import { ContactUs } from "./entities/contact-us.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { safeError } from "src/common/helper-functions/safe-error.helper";
import { runInTransaction } from "src/common/helper-functions/transaction.helper";
import { EmailService } from "src/common/helper-modules/mailing/mailing.service";
import { emailOnContactTemplate } from "src/common/helper-modules/mailing/html-as-constants/automatic-email-on-contact-us";

@Injectable()
export class ContactUsService {
  constructor(
    @InjectRepository(ContactUs)
    private readonly contactUsRepository: Repository<ContactUs>,
    private readonly emailService: EmailService
  ) {}
  async create(createContactUsDto: CreateContactUsDto) {
    await this.emailService.sendMail(
      createContactUsDto.email,
      `Greetings from Himalaya Restaurant.`,
      emailOnContactTemplate,
      {}
    );

    const contactUsInstance = Object.assign(new ContactUs(), {
      ...createContactUsDto,
      isEmailSent: true,
    });

    const contactUs = this.contactUsRepository.create(contactUsInstance);
    const [newContactUs, error] = await safeError(
      runInTransaction(async (queryRunner) => {
        return await queryRunner.manager.save(ContactUs, contactUs);
      })
    );
    if (error)
      throw new InternalServerErrorException(
        `Error saving Contact Us Informations.`
      );

    return {
      success: true,
      message: `Contact Us Informations has been saved successfully and an thanks email has been forwarded to the probable customer.`,
    };
  }

  async findAll() {
    const [allContactUs, error] = await safeError(
      this.contactUsRepository.find({
        select: [
          "id",
          "firstName",
          "lastName",
          "location",
          "email",
          "isEmailSent",
          "phoneNumber",
          "subject",
          "message",
        ],
      })
    );
    if (error)
      throw new InternalServerErrorException(
        `Error while fetching Contact Us Informations.`
      );
    return allContactUs;
  }

  async findAllEmails() {
    const [allEmailsData, error] = await safeError(
      this.contactUsRepository.find({
        select: ["email"],
      })
    );
    if (error)
      throw new InternalServerErrorException(
        `Error while fetching Contact Us Informations.`
      );
    const allEmails = allEmailsData.map((item) => item.email);
    return allEmails;
  }

  async findOne(id: number) {
    const [contactUs, error] = await safeError(
      this.contactUsRepository.findOne({
        select: [
          "id",
          "firstName",
          "lastName",
          "location",
          "email",
          "isEmailSent",
          "phoneNumber",
          "subject",
          "message",
        ],
        where: {},
      })
    );
    if (error)
      throw new InternalServerErrorException(
        `Error while fetching Contact Us Information.`
      );
    if (!contactUs)
      throw new NotFoundException(`Contact Informations not found.`);
    return contactUs;
  }

  async remove(id: number) {
    const contactUs = await this.findOne(id);
    const [deletedContactUs, error] = await safeError(
      runInTransaction(async (queryRunner) => {
        return await queryRunner.manager.softRemove(ContactUs, contactUs);
      })
    );
    if (error)
      throw new InternalServerErrorException(
        `Error deleting Contact Information.`
      );
    return {
      success: true,
      message: `Contact Us Information deleted successfully.`,
    };
  }
}
