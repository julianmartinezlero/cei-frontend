export interface ApiResponse {
  items: [any];
  meta: MetaResponse;
}
export interface MetaResponse {
  totalItems: number;
  itemCount: number;
  itemsPerPage: number;
  totalPages: number;
  currentPage: number;
}
