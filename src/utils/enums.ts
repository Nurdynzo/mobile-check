export enum PaginationState {
  /** status when state variable is initialized.*/
  None = 'None',

  /** status if the returned data for the first page is empty
  note: there wouldn't be anymore pages to go to then.*/
  NoItems = 'NoItems',

  /** status when a page is successfully fetched and it contains items (data).*/
  Success = 'Success',

  /** status when request is being made to fetch the first page.*/
  FirstPageProgress = 'First page progress',

  /** status when request to fetch the first page results in an error.*/
  FirstPageError = 'First page error',

  /** status when request is being made to fetch a new page.*/
  NewPageProgress = 'New page progress',

  /** status when request to fetch a new page results in an error.*/
  NewPageError = 'New page error',

  /** status when page requested is returned empty.*/
  NoItemsFound = 'No items found',

  /** status when the last page is reached and there are no more pages. */
  NoMoreItems = 'No more items',

  /** status when request is being made to re-fetch from the first page in the
  background without setting state to [firstPageProgress]. */
  BackgroundRefresh = 'Background refresh',
}
