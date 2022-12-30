export const isEmpty = (obj: any) => {
  return Object.keys(obj).length === 0;
};

export const isValid = (obj: object) => {
  return obj && !isEmpty(obj);
};
