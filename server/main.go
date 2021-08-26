package main

import (
	"os"
	"time"

	"server/routes"
	"github.com/gin-gonic/gin"
    "github.com/gin-contrib/cors"
)

func main() {

	port := os.Getenv("PORT")

	if port == "" {
		port = "8000"
	}

	router := gin.New()
	router.Use(gin.Logger())

	// CORS for http:localhost:5000 and https://github.com origins, allowing:
    // - POST, GET, PUT, DELETE
    // - Origin header
    // - Credentials share
    // - Preflight requests cached for 12 hours
    router.Use(cors.New(cors.Config{
        AllowOrigins:     []string{"http://localhost:3000"},
        AllowMethods:     []string{"POST", "GET", "PUT", "DELETE"},
        AllowHeaders:     []string{"Origin", "content-type"},
        ExposeHeaders:    []string{"Content-Length"},
        AllowCredentials: true,
        AllowOriginFunc: func(origin string) bool {
            return origin == "https://github.com"
        },
        MaxAge: 12 * time.Hour,
		
    }))

	// these are the endpoints
	//C
	router.POST("/order/create", routes.AddOrder)
	//R
	router.GET("/waiter/:waiter", routes.GetOrdersByWaiter)
	router.GET("/orders", routes.GetOrders)
	router.GET("/order/:id/", routes.GetOrderById)
	//U
	router.PUT("/waiter/update/:id", routes.UpdateWaiter)
	router.PUT("/order/update/:id", routes.UpdateOrder)
	//D
	router.DELETE("/order/delete/:id", routes.DeleteOrder)

	//this runs the server and allows it to listen to requests.
	router.Run(":" + port)
}