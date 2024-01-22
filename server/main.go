package main

import (
	"machnet/controllers/transactions"
	"machnet/database"

	"github.com/joho/godotenv"

	"github.com/gofiber/fiber/v2"
)

func main() {
	godotenv.Load(".env")
	app := fiber.New()
	api_v1 := app.Group("/api/v1")
	database.Connect()
	transactions.SetupTransactionsRoutes(api_v1.Group("/transactions"))
	app.Listen(":8000")
}
