package services

type PaginationResponse struct {
	TotalCount  int         `json:"total_count"`
	PageSize    int         `json:"page_size"`
	CurrentPage int         `json:"current_page"`
	TotalPages  int         `json:"total_pages"`
	Data        interface{} `json:"data"`
}
