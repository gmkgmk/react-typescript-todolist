export default (key: string | number, enums: any = [], keyName = 'key') => {
  const obj = enums.find(e => e[keyName] === key);
  return obj ? obj.value : '';
};
