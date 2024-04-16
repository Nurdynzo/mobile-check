/* eslint-disable @typescript-eslint/no-explicit-any */
export function getChangedProperties(
  obj1: Record<string, any>,
  obj2: Record<string, any>,
): Record<string, any> | null {
  const obj1Keys = Object.keys(obj1);

  const changedProperties: Record<string, any> = {};

  let hasChanges = false;

  for (const key of obj1Keys) {
    const value1 = obj1[key];
    const value2 = obj2[key];

    if (Array.isArray(value1) && Array.isArray(value2)) {
      if (JSON.stringify(value1) !== JSON.stringify(value2)) {
        changedProperties[key] = value2;
        hasChanges = true;
      }
    } else if (typeof value1 === 'object' && typeof value2 === 'object') {
      const nestedChanges = getChangedProperties(value1, value2);
      if (nestedChanges !== null) {
        changedProperties[key] = nestedChanges;
        hasChanges = true;
      }
    } else if (typeof value1 === 'string' && typeof value2 === 'string') {
      if (value1.trim().toLowerCase() !== value2.trim().toLowerCase()) {
        changedProperties[key] = value2;
        hasChanges = true;
      }
    } else if (value1 !== value2) {
      changedProperties[key] = value2;
      hasChanges = true;
    }
  }

  return hasChanges ? changedProperties : null;
}
