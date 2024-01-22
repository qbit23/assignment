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

	Date            time.Time     `json:"date"`
	From            string        `json:"from"`
	To              string        `json:"to"`
	Amount          float64       `json:"amount"`
	Account         string        `json:"account"`
	BankDescription string        `json:"bank_description"`
	PaymentMethod   string        `json:"payment_method"`
	Status          PaymentStatus `json:"payment_status" gorm:"default:pending"`
}
