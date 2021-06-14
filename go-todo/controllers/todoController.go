package controllers

import (
	"strconv"

	"github.com/Animish-Sharma/go-todo/database"
	"github.com/Animish-Sharma/go-todo/models"
	"github.com/gofiber/fiber"
)

func TodoList(c *fiber.Ctx) error {
	var todos []models.Todo
	database.DB.Find(&todos)
	return c.JSON(todos)
}

func TodoDetail(c *fiber.Ctx) error {

	var todo models.Todo

	id := c.Params("id")

	database.DB.Where("id = ?", id).First(&todo)

	if todo.ID == 0 {
		return c.JSON(fiber.Map{
			"Error": "Todo Not Found",
		})
	}
	return c.JSON(todo)
}

func TodoCreate(c *fiber.Ctx) error {
	var data map[string]string

	if err := c.BodyParser(&data); err != nil {
		panic(err)
	}
	todo := models.Todo{
		Title:       data["title"],
		Description: data["description"],
	}

	database.DB.Create(&todo)
	return c.JSON(&todo)
}

func TodoUpdate(c *fiber.Ctx) error {
	var data map[string]string
	if err := c.BodyParser(&data); err != nil {
		panic(err)
	}

	var todo models.Todo
	id, _ := strconv.Atoi(data["id"])
	database.DB.Where("id = ?", id).First(&todo)

	todo.Title = data["title"]
	todo.Description = data["description"]

	database.DB.Save(&todo)
	return c.JSON(todo)
}

func TodoDelete(c *fiber.Ctx) error {
	var todo models.Todo

	id := c.Params("id")

	database.DB.Where("id = ?", id).Delete(&todo)

	if todo.ID == 0 {
		return c.JSON(fiber.Map{
			"Error": "Todo Not Found",
		})
	}
	return c.JSON(fiber.Map{
		"Success": "Successfully Deleted",
	})
}
