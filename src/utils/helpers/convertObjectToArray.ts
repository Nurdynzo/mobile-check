export function convertObjectToArray(dataObject: object) {
  if (Object.keys(dataObject).length > 0) {
    return Object.entries(dataObject).map(([key, value]) => ({
      ...value,
      name: key,
    }));
  } else {
    return [];
  }
}
