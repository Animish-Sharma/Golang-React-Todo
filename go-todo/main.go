package main

import (
	"log"

	"github.com/Animish-Sharma/go-todo/database"
	"github.com/Animish-Sharma/go-todo/routes"
	"github.com/gofiber/fiber"
	"github.com/gofiber/fiber/middleware/cors"
)

func main() {
	database.Connect()
	app := fiber.New()

	app.Use(cors.New())

	routes.Setup(app)
	log.Fatal(app.Listen(":3000"))
}
