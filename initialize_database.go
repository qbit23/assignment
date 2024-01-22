package main

import (
	"encoding/json"
	"fmt"
	"log"
	"os"
	"time"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

type Transaction struct {
	gorm.Model

	Date            time.Time     `json:"date"`
	From            string        `json:"from"`
	To              string        `json:"to"`
	Amount          float64       `json:"amount"`
	Account         string        `json:"account"`
	BankDescription string        `json:"bank_description"`
	PaymentMethod   string        `json:"payment_method"`
	Status          PaymentStatus `json:"payment_status" gorm:"default:pending"`
}

type PaymentStatus string

const (
	Pending    PaymentStatus = "pending"
	Successful PaymentStatus = "successful"
)

func main() {
	dsn := "host=localhost user=machnet_admin password=password sslmode=disable"
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatal(err)
	}
	defer closeDB(db)

	db.Migrator().DropTable(&Transaction{})
	err = db.AutoMigrate(&Transaction{})
	if err != nil {
		log.Fatal(err)
	}

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

func loadTransactionsFromFile(filename string) ([]Transaction, error) {
	file, err := os.Open(filename)
	if err != nil {
		return nil, err
	}
	defer file.Close()

	var transactions []Transaction
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
