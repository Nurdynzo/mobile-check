/**
 * filterData returns items from filterableData that match the provided text in the specified field.
 * If no match is found, it returns an empty array. If no text is provided, it returns all items.
 * @param text - The search term
 * @param filterableData - The data to be filtered
 * @param field - The field to search in
 */
export const filterData = <T>(
  text: string,
  filterableData: Array<T> | undefined,
  field: keyof T,
) => {
  if (!filterableData) {
    return filterableData;
  }
  if (text.trim()) {
    return filterableData?.filter((item: T) =>
      formatString(item[field] as string, text),
    );
  } else {
    return filterableData;
  }
};

const formatString = (text: string | undefined, searchQuery: string) =>
  text?.trim().toLowerCase().includes(searchQuery.toLowerCase().trim());
