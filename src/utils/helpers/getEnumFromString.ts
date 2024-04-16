export function getEnumFromString<T extends Record<string, string>>(
  enumObj: T,
  value: string,
): T[keyof T] | undefined {
  const enumValues = Object.values(enumObj) as Array<T[keyof T]>;
  return enumValues.find(enumValue => enumValue === value) || undefined;
}
