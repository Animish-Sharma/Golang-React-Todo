package routes

import (
	"github.com/Animish-Sharma/go-todo/controllers"
	"github.com/gofiber/fiber"
)

func Setup(app *fiber.App) {
	app.Get("/", controllers.TodoList)
	app.Get("/:id", controllers.TodoDetail)
	app.Post("/", controllers.TodoCreate)
	app.Put("/", controllers.TodoUpdate)
	app.Delete("/:id", controllers.TodoDelete)
}
