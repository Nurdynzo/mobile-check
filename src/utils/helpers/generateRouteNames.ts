export const generateRouteNames = <
  TInitials extends string,
  TNames extends string,
>(options: {
  initials: TInitials;
  names: TNames[];
}) => {
  const {initials, names} = options;
  const result = {} as {[K in `${TInitials}__${TNames}`]: K};

  names.forEach(name => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    result[`${initials}__${name}`] = `${initials}_${name}` as any;
  });

  return result;
};
