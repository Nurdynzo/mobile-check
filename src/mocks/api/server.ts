import {setupServer} from 'msw/node';
import {handlers} from './handlers';
import {HttpResponse, http} from 'msw';

export const server = setupServer(...handlers);

export const modifiableMockGetApi = <T>({
  url,
  result,
  success = true,
  error = false,
}: {
  url: string;
  result: T | null;
  success?: boolean;
  error?: boolean;
}) => {
  return server.use(
    http.get(`${process.env.API_BASE_URL}/${url}`, () => {
      return HttpResponse.json(
        {
          result,
          success,
          targetUrl: null,
          error: error ? {message: 'Error'} : null,
          unAuthorizedRequest: error,
          __abp: true,
        },
        {status: error ? 500 : undefined},
      );
    }),
  );
};
