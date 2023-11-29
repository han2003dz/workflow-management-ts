interface ObjectPagination {
  currentPage: number;
  limitItems: number;
  skip?: number;
  totalPage: number;
}

export const paginationHelper = (
  objectPagination: ObjectPagination,
  query,
  countRecords: number
): ObjectPagination => {
  if (query.page) {
    objectPagination.currentPage = parseInt(query.page);
  }
  if (query.limit) {
    objectPagination.limitItems = parseInt(query.limit);
  }

  objectPagination.skip = objectPagination.
  return objectPagination;
};
