package config

import (
	"github.com/BlackfireZZZ/GoCalculator/agent/pkg/calculator"
)

func GetConfigRequestHandler(config *calculator.Config) echo.HandlerFunc {
	return func(c echo.Context) error {
		return c.JSON(200, config)
	}
}
