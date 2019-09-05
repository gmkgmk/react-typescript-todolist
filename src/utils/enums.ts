interface IEnums {
  [keyName: string]: string;
}

export default (
  key: string | number,
  enums: IEnums[] = [],
  keyName = 'key'
): string => {
  const obj = enums.find(e => e[keyName] === key);
  return obj ? obj.value : '';
};
