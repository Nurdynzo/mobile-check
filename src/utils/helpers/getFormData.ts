import {logThis} from './logThis';

export const getFormData = (object: {
  [key: string]: object | object[] | string | number | boolean;
}): FormData | undefined => {
  try {
    const formData: FormData = new FormData();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const createFormData = function (obj: any, subKeyStr = '') {
      for (const i in obj) {
        const value = obj[i];
        const subKeyStrTrans = subKeyStr ? subKeyStr + '[' + i + ']' : i;

        if (
          typeof value === 'string' ||
          typeof value === 'number' ||
          typeof value === 'boolean'
        ) {
          formData.append(subKeyStrTrans, value);
        } else if (
          Array.isArray(value) &&
          'uri' in value[0] &&
          'type' in value[0]
        ) {
          for (const image of value) {
            formData.append(i, image);
          }
        } else if (
          typeof value === 'object' &&
          'uri' in value &&
          'type' in value
        ) {
          formData.append(i, value);
        } else {
          createFormData(value, subKeyStrTrans);
        }
      }
    };

    createFormData(object);

    return formData;
  } catch (error) {
    logThis('Form data error===', error);
  }
};
