import { ArgumentMetadata, Injectable, PipeTransform } from "@nestjs/common";

@Injectable()
export class NullToEmptyStringPipe implements PipeTransform {
  transform(value: unknown, _metadata: ArgumentMetadata): unknown {
    if (typeof value !== "object" || value === null) return value;
    return convertNullsAndUndefinedToEmptyStrings(value);
  }
}

function convertNullsAndUndefinedToEmptyStrings(value: unknown): unknown {
  if (value === null || value === undefined) return "";

  if (Array.isArray(value)) {
    return value.map((item) => convertNullsAndUndefinedToEmptyStrings(item));
  }

  if (typeof value === "object" && value !== null) {
    if (value instanceof Date || value instanceof RegExp) return value;

    const result: Record<string, unknown> = {};
    for (const key of Object.keys(value)) {
      result[key] = convertNullsAndUndefinedToEmptyStrings(
        (value as Record<string, unknown>)[key]
      );
    }
    return result;
  }

  return value;
}
