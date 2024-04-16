export interface ApiError {
  code: number;
  message: string;
  details: string;
  validationErrors: unknown;
  type: 'ApiError';
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getErrorMessage = (error: ApiError | Error | any) => {
  if ('type' in error && error.type === 'ApiError') {
    return error.message;
  } else if ('message' in error) {
    return error.message;
  }
  return error.TypeError ?? 'Something went wrong';
};
