export const getFileName = (file: string) => {
  if (typeof file !== 'string') {
    return undefined;
  }
  const fileNames = file?.split('/');
  return fileNames[fileNames?.length - 1];
};
