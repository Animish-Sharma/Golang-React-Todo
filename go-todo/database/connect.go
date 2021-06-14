package database

import (
	"github.com/Animish-Sharma/go-todo/models"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var DB *gorm.DB

func Connect() {
	connection, err := gorm.Open(mysql.Open("username:yourpassword@/todo"), &gorm.Config{})

	if err != nil {
		panic(err)
	}
	DB = connection

	DB.AutoMigrate(&models.Todo{})
}
