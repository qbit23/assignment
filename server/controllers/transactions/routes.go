/*
This file contains all the uri's to access transactions resource
*/
package transactions

import (
	"github.com/gofiber/fiber/v2"
)

func SetupTransactionsRoutes(transactions fiber.Router) {
	transactions.Get("/", HandleGetTransactions)
}
