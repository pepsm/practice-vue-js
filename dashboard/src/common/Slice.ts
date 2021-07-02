import { Entry } from "./Entry";

export const sliceEntries = function (
  arr: Array<Entry>,
  chunkSize: number
): Array<Array<Entry>> {
  const res = Array<Array<Entry>>();
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    res.push(chunk);
  }
  return res;
};
