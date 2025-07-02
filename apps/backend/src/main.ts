import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ConfigService } from "@nestjs/config";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppDataSource } from "./database/data-source";
import { Logger } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: "*",
    allowedHeaders: "*",
    methods: "*",
  });

  const logger = new Logger("Bootstrap");
  await AppDataSource.initialize()
    .then(() => {
      logger.log("Data Source has been initialized!");
    })
    .catch((err) => {
      logger.error("Error during Data Source initialization:", err);
    });

  const configService = app.get<ConfigService>(ConfigService);
  const environment: string =
    configService.get<string>("APP_ENV") || "development";
  if (environment.toUpperCase() !== "PRODUCTION") {
    const swaggerDocumentInstance = new DocumentBuilder()
      .setTitle("Himalaya Restaurant - Tai Wong Street, HK")
      .setDescription("Himalaya Restaurant's API Documentation.")
      .setVersion("1.0")
      .addBearerAuth()
      .build();
    const documentFactory = () =>
      SwaggerModule.createDocument(app, swaggerDocumentInstance);
    SwaggerModule.setup("swagger", app, documentFactory, {
      customSiteTitle: "Himalayan Restaurant",
    });
  }

  await app.listen(configService.get("APP_PORT") ?? 3000);
}

bootstrap();
