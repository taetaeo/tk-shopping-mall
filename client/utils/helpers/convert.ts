export const stringToNumber = (value: string) => {
  return Number(value) || 0;
};

export const arrToObj = (arr: [string, any][]) => {
  arr.reduce<{ [key: string]: any }>((res, current) => {
    const [key, value] = current;
    res[key] = value;
    return res;
  }, {});
};
export const commaByThreeDigit = (number: number) => {
  if (typeof number !== "number") throw Error("타입이 맞지 않습니다.");
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
