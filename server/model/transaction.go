package model

import (
	"time"

	"gorm.io/gorm"
)

type PaymentStatus string

const (
	PaymentPending    PaymentStatus = "pending"
	PaymentSuccessful PaymentStatus = "successful"
)

type Transaction struct {
	gorm.Model

	UserID          uint          `json:"user_id"`
	User            User          `gorm:"foreignKey:UserID"`
	Date            time.Time     `json:"date"`
	From            time.Time     `json:"from"`
	To              time.Time     `json:"to"`
	Amount          float64       `json:"amount"`
	Account         string        `json:"account"`
	BankDescription string        `json:"bank_description"`
	PaymentMethod   string        `json:"payment_method"`
	Status          PaymentStatus `json:"payment_status" gorm:"default:pending"`
}
