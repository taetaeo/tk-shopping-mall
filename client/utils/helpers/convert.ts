export const stringToNumber = (value: string) => {
  return Number(value) || 0;
};

export const arrToObj = (arr: [string, any][]) =>
  arr.reduce<{ [key: string]: any }>((res, current) => {
    const [key, value] = current;
    res[key] = value;
    return res;
  }, {});
