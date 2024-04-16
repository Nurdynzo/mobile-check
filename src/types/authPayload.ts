type AuthPayload = {
  accessToken?: string;
  refreshToken?: string | null;

  /** The is time value in milliseconds gotten by calling the `getTime()` method on a Date instnace. */
  expiresAt: number;
};

export default AuthPayload;
