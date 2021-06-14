package models

import (
	"time"
)

type Todo struct {
	ID          uint      `json:"id"`
	Title       string    `json:"title"`
	Description string    `json:"description"`
	Completed   bool      `default:"false" json:"completed"`
	Created     time.Time `default:"time.Now().Unix()"`
}
