interface ObjectPagination {
  currentPage: number;
  limitItems: number;
  skip?: number;
  totalPage: number;
}

export const paginationHelper = (
  objectPagination: ObjectPagination,
  query,
  countRecords
) => {};
