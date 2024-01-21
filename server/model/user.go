package model

import (
	"github.com/google/uuid"
	"golang.org/x/crypto/bcrypt"
	"gorm.io/gorm"
)

type User struct {
	gorm.Model
	UserID   uuid.UUID `gorm:"type:uuid;default:gen_random_uuid();primaryKey;not null"`
	Username string    `gorm:"uniqueIndex;not null"`
	Password string
}

func (user *User) BeforeSave(tx *gorm.DB) (err error) {
	if user.Password != "" {
		hashedPassword, err := bcrypt.GenerateFromPassword([]byte(user.Password), bcrypt.DefaultCost)
		if err != nil {
			return err
		}
		user.Password = string(hashedPassword)
	}
	return nil
}
