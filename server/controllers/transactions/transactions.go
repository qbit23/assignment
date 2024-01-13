package transactions

import (
	"github.com/gofiber/fiber/v2"
)

func SetupTransactionsRoutes(transactions fiber.Router) {
	transactions.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("hello from /api/transactions")
	})

	transactions.Get("/test", func(c *fiber.Ctx) error {
		return c.SendString("hello from /api/transactions/test")
	})
}
