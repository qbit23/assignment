package main

import (
	"encoding/json"
	"fmt"
	"log"
	"machnet/controllers/transactions"
	"machnet/database"
	"machnet/model"
	"os"

	"github.com/joho/godotenv"
	"gorm.io/gorm"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func main() {
	godotenv.Load(".env") // For local development purpose
	app := fiber.New()
  app.Use(cors.New())
	api_v1 := app.Group("/api/v1")
	database.Connect()
	LoadSampleData(*database.Database)

	transactions.SetupTransactionsRoutes(api_v1.Group("/transactions"))

	app.Get("/health", HandleHealthCheck)

	app.Listen(":8000")
}

func HandleHealthCheck(c *fiber.Ctx) error {
	return c.SendString("Welcome to machnet API\n")
}

func LoadSampleData(db gorm.DB) {
	db.Migrator().DropTable(&model.Transaction{})
	db.AutoMigrate(&model.Transaction{})

	transactions, err := loadTransactionsFromFile("transaction_data.json")
	if err != nil {
		log.Fatal(err)
	}

	for _, transaction := range transactions {
		result := db.Create(&transaction)
		if result.Error != nil {
			log.Printf("Error inserting transaction: %v", result.Error)
		}
	}

	fmt.Println("Transactions inserted successfully!")
}

func loadTransactionsFromFile(filename string) ([]model.Transaction, error) {
	file, err := os.Open(filename)
	if err != nil {
		return nil, err
	}
	defer file.Close()

	var transactions []model.Transaction
	decoder := json.NewDecoder(file)

	err = decoder.Decode(&transactions)
	if err != nil {
		return nil, err
	}
	return transactions, nil
}

func closeDB(db *gorm.DB) {
	sqlDB, err := db.DB()
	if err != nil {
		log.Printf("Error getting underlying *sql.DB: %v", err)
		return
	}
	sqlDB.Close()
}
