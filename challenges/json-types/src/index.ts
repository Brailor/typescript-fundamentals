// 💡 HINT: number[] and Array<number> mean the same thing

export type JSONValue = string | number | boolean | null | JSONObject | JSONArray;

export interface JSONObject {
  [k: string]: JSONValue;
}

export interface JSONArray extends Array<JSONValue> {}
