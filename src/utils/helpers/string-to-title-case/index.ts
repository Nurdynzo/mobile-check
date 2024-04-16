const stringToTitleCase = (value?: string) => {
  if (!value) {
    return value;
  }

  return `${value[0]?.toUpperCase()}${value?.slice(1).toLowerCase()}`;
};

export default stringToTitleCase;
