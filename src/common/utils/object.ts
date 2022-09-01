export const convertToDotNotation = (object: any, current: string = undefined, newObject: any = undefined) => {
  const tmpObject = newObject || {};

  Object.keys(object).forEach((key) => {
    const value = object[key];
    const newKey = current ? `${current}.${key}` : key;

    if (typeof value === 'object') {
      convertToDotNotation(value, newKey, tmpObject);
    } else if (value) {
      tmpObject[newKey] = value;
    }
  });

  return tmpObject;
};
