/**
 *
 * @param data  An array (or array-like list) of items.
 * @param numColumns defaults to 1
 * @description this function is designed to ensure that a given data array can be seamlessly displayed in a UI with a specified number of columns, even if the last row has fewer elements than the others. The inserted empty elements help maintain a consistent and visually pleasing layout.
 * @returns the function returns the formatted array, including empty elements, suitable for rendering in a grid or list-based UI.
 */

const formatListData = <T>(
  data: T[],
  numColumns: number,
): Array<T | {id?: string; empty?: boolean}> => {
  // Define a specific type for the empty elements
  type EmptyElement = {id: string; empty: true};

  if (data?.length > 0) {
    const numberOfFullRows = Math.floor(data.length / numColumns);

    let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;
    while (
      numberOfElementsLastRow !== numColumns &&
      numberOfElementsLastRow !== 0
    ) {
      // Use the EmptyElement type when pushing new elements
      const emptyElement: EmptyElement = {
        id: `empty-${numberOfElementsLastRow}`, // Changed to use a dash for readability
        empty: true,
      };
      data.push(emptyElement as T & EmptyElement); // Ensure the pushed element matches the function's return type
      numberOfElementsLastRow++;
    }

    return data;
  }
  return [];
};

export default formatListData;
