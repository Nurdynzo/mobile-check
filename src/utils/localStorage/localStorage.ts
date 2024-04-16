import {MMKV} from 'react-native-mmkv';

// TODO(Philip): Add encryption key, id
const storage = new MMKV();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const store = (key: string, value: any) => {
  try {
    const jsonValue = JSON.stringify(value);
    storage.set(key, jsonValue);
  } catch (error) {}
};

const get = <T>(key: string) => {
  try {
    const jsonValue = storage.getString(key);
    return jsonValue !== undefined ? (JSON.parse(jsonValue) as T) : null;
  } catch (error) {
    return null;
  }
};

const remove = (key: string) => {
  try {
    storage.delete(key);
  } catch (error) {}
};

const removeAll = () => {
  try {
    storage.clearAll();
  } catch (error) {}
};

const removeAllExcept = (keys: string[]) => {
  try {
    for (const key of storage.getAllKeys()) {
      if (!keys.some(value => key === value)) {
        storage.delete(key);
      }
    }
  } catch (error) {}
};

const contains = (key: string) => {
  try {
    storage.contains(key);
  } catch (error) {}
};

export default {store, get, remove, removeAll, contains, removeAllExcept};
