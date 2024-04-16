import '@testing-library/jest-native/extend-expect';

import 'react-native-gesture-handler/jestSetup';
import {server} from './src/mocks/api/server';
import {baseApi} from '@/state/services/baseApi';
import {setupStore} from '@/state/store';
import {logThis} from '@/utils/helpers/logThis';

const store = setupStore({});

global.fetch = require('node-fetch');

jest.mock('react-native-image-crop-picker', () => 'ImagePicker');
jest.mock('react-native-blob-util', () => 'ReactNativeBlobUtil');

jest.mock('@react-navigation/native', () => {
  return {
    createNavigatorFactory: jest.fn(),
    useNavigation: jest.fn(),
  };
});
jest.mock('@react-navigation/stack', () => ({
  createStackNavigator: jest.fn(),
}));

jest.mock('react-native-document-picker', () => 'DocumentPicker');
jest.mock('@miblanchard/react-native-slider', () => 'Slider');

jest.mock('@react-native-voice/voice', () => {
  return {
    default: {
      onSpeechStart: jest.fn(),
      onSpeechEnd: jest.fn(),
      onSpeechResults: jest.fn(),
      onSpeechError: jest.fn(),
      start: jest.fn(),
      stop: jest.fn(),
    },
  };
});

// Establish API mocking before all tests.
beforeAll(() =>
  server.listen({
    onUnhandledRequest(req) {
      logThis('Found an unhandled %s request to %s', req.method, req.url);
    },
  }),
);

beforeEach(() => {
  jest.clearAllMocks();
});

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => {
  server.resetHandlers();
  // This is the solution to clear RTK Query cache after each test
  store.dispatch(baseApi.util.resetApiState());

  jest.clearAllMocks();
});

// Clean up after the tests are finished.
afterAll(() => server.close());
