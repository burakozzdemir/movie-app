import _ from "lodash";

export function convertToCamelCase<T>(objs: Array<any>): T {
  return objs.map((obj: any) =>
    _.mapKeys(obj, (_value, key) => _.camelCase(key))
  ) as T;
}
