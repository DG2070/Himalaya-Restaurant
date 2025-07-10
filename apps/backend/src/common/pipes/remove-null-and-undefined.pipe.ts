import { PipeTransform, Injectable, ArgumentMetadata } from "@nestjs/common";

@Injectable()
export class RemoveNullAndUndefinedPipe implements PipeTransform {
  transform(value: unknown, metadata: ArgumentMetadata): unknown {
    if (metadata.type !== "body") return value;

    if (typeof value !== "object" || value === null) return value;

    return removeNullUndefinedAndEmptyObjects(value);
  }
}

function removeNullUndefinedAndEmptyObjects(value: unknown): unknown {
  if (value === null || value === undefined) return undefined;

  if (Array.isArray(value)) {
    return value
      .map((item) => removeNullUndefinedAndEmptyObjects(item))
      .filter(
        (item) =>
          item !== undefined &&
          !(
            typeof item === "object" &&
            item !== null &&
            Object.keys(item).length === 0
          )
      );
  }

  if (typeof value === "object" && value !== null) {
    if (value instanceof Date || value instanceof RegExp) return value;

    const result: Record<string, unknown> = {};
    for (const key of Object.keys(value)) {
      const cleanedValue = removeNullUndefinedAndEmptyObjects(
        (value as Record<string, unknown>)[key]
      );
      if (cleanedValue !== undefined) {
        result[key] = cleanedValue;
      }
    }
    return result;
  }

  return value;
}
