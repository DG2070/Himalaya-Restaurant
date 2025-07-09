import { ArgumentMetadata, Injectable, PipeTransform } from "@nestjs/common";

@Injectable()
export class NullToEmptyStringPipe implements PipeTransform {
  transform(value: any, _metadata: ArgumentMetadata) {
    if (typeof value !== "object" || value === null) return value;

    for (const key of Object.keys(value)) {
      if (value[key] === null) {
        value[key] = "";
      }
    }

    return value;
  }
}
