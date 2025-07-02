import { Logger } from "@nestjs/common";
import { AppDataSource } from "src/database/data-source";
import { QueryRunner } from "typeorm";

export async function runInTransaction<T>(
  operation: (queryRunner: QueryRunner) => Promise<T>
): Promise<T> {
  const looger = new Logger();

  const queryRunner = AppDataSource.createQueryRunner();
  await queryRunner.connect();
  await queryRunner.startTransaction();

  try {
    const result = await operation(queryRunner);
    await queryRunner.commitTransaction();

    return result;
  } catch (error) {
    await queryRunner.rollbackTransaction();
    looger.error(error.message, "Transaction Failed");
    throw error;
  } finally {
    await queryRunner.release();
  }
}
