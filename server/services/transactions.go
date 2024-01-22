package services

import (
	"machnet/database"
	"machnet/model"
)

func FetchPaginatedTransasaction(currentPage, pageSize int) (PaginationResponse, error) {
	var transactions []model.Transaction

	offset := (currentPage - 1) * pageSize
	limit := pageSize

	var totalCount int64
	count_result := database.Database.Model(&model.Transaction{}).Count(&totalCount)
	if count_result.Error != nil {
		return PaginationResponse{}, count_result.Error
	}

	// fmt.Printf("Offset: %d Limit %d CurrentPage: %d", offset, limit, currentPage)
	result := database.Database.
		Omit("CreatedAt", "UpdatedAt", "DeletedAt").
		Limit(limit).
		Offset(offset).
		Find(&transactions)

	if result.Error != nil {
		return PaginationResponse{}, result.Error
	}

	pagination := NewPaginationResponse(int(totalCount), pageSize, currentPage, transactions)
	return *pagination, nil

}
