package transactions

import (
	"machnet/services"
	"strconv"

	"github.com/gofiber/fiber/v2"
)

func HandleGetTransactions(c *fiber.Ctx) error {
	currentPage, err := strconv.Atoi(c.Query("currentPage"))
	if err != nil || currentPage <= 0 {
		currentPage = 1
	}

	pageSize, err := strconv.Atoi(c.Query("pageSize"))
	if err != nil || pageSize <= 0 {
		pageSize = 25
	}

	result, err := services.FetchPaginatedTransasaction(currentPage, pageSize)

	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": err.Error(),
		})
	}
	return c.JSON(result)
}
