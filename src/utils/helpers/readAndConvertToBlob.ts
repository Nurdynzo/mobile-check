import ReactNativeBlobUtil from 'react-native-blob-util';

export const filePathToFile = async ({
  filePath,
  mime,
}: {
  filePath: string;
  mime: string;
}) => {
  const fileStats = await ReactNativeBlobUtil.fs.stat(filePath);
  const fileContent = await ReactNativeBlobUtil.fs.readFile(filePath, 'base64');

  return {
    name: fileStats.filename,
    size: fileStats.size,
    type: mime,
    url: `data:${mime};base64,${fileContent}`,
  };
};

export const base64ToFile = async ({
  base64,
  filePath,
}: {
  base64: string;
  filePath: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}): Promise<any> => {
  const file = await ReactNativeBlobUtil.fs.writeFile(
    filePath,
    base64,
    'base64',
  );
  return file;
};

export const base64ToBlob = async (
  base64String: string,
): Promise<Blob | null> => {
  const response = await fetch(base64String);
  const blob = await response.blob();
  return blob;
};

export function uriToBlob(uri: string): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = () => {
      const blob = xhr.response;
      resolve(blob);
    };
    xhr.onerror = err => {
      reject(err);
    };
    xhr.open('GET', uri);
    xhr.send();
  });
}

export const base64ToMedia = ({
  base64,
  contentType,
}: {
  base64: string;
  contentType: string;
}) => {
  return `data:${contentType};base64,${base64}`;
};

export const readAndConvertToBase64 = async ({
  filePath,
}: {
  filePath: string;
}): Promise<string> => {
  const base64Data = await ReactNativeBlobUtil.fs.readFile(
    filePath,
    'base64',
    4095,
  );
  return base64Data;
};
