package config

import (
	agent_proto "github.com/BlackfireZZZ/GoCalculator/proto"
	"github.com/labstack/echo/v4"
)

func GetConfigRequestHandler(config *agent_proto.Config) echo.HandlerFunc {
	return func(c echo.Context) error {
		return c.JSON(200, config)
	}
}
