package main

import (
	"github.com/gofiber/fiber/v2"
	"github.com/igaurab/machnet/server/controllers/transactions"
)

func main() {
	app := fiber.New()
	api_v1 := app.Group("/api/v1")

	transactions.SetupTransactionsRoutes(api_v1.Group("/transactions"))
	app.Listen(":8000")
}
