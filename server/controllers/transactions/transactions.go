package transactions

import (
	"machnet/database"
	"machnet/model"

	"github.com/gofiber/fiber/v2"
)

func HandleGetTransactions(c *fiber.Ctx) error {
	var transactions []model.Transaction
	result := database.Database.
		Omit("CreatedAt", "UpdatedAt", "DeletedAt").
		Limit(25).
		Find(&transactions)

	if result.Error != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": result.Error.Error(),
		})
	}
	return c.JSON(transactions)
}
