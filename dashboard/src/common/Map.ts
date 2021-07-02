import { Entry } from "./Entry";

export const mapEntries = function (entries: any): Array<any> {
  const result: any = [];
  if (entries != undefined) {
    for (let i = 0; i < entries.length; i++) {
      const e = entries[i];
      result.push(
        new Entry(
          i,
          e.API,
          e.Description,
          e.Auth,
          e.Link,
          e.HTTPS,
          e.Cors,
          e.Category
        )
      );
    }
  }
  return result;
};
