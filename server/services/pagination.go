package services

type PaginationResponse struct {
	TotalCount  int         `json:"total_count"`
	PageSize    int         `json:"page_size"`
	CurrentPage int         `json:"current_page"`
	TotalPages  int         `json:"total_pages"`
	Data        interface{} `json:"data"`
}

func NewPaginationResponse(totalCount, pageSize, currentPage int, data interface{}) *PaginationResponse {
	return &PaginationResponse{
		TotalCount:  totalCount,
		PageSize:    pageSize,
		CurrentPage: currentPage,
		TotalPages:  (totalCount + pageSize - 1) / pageSize,
		Data:        data,
	}
}
