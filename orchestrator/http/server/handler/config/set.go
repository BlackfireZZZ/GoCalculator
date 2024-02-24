package config

import (
	"github.com/BlackfireZZZ/GoCalculator/agent/pkg/calculator"
	"github.com/BlackfireZZZ/GoCalculator/orchestrator/internal/agents/manager"
)

func SetConfigRequestHandler(mangr *manager.AgentManager) echo.HandlerFunc {
	return func(c echo.Context) error {
		var newConfig calculator.Config
		if err := c.Bind(&newConfig); err != nil {
			return c.JSON(400, err)
		}
		newConfig.ParallelWorkers = mangr.CalculatorConfig.ParallelWorkers
		*mangr.CalculatorConfig = newConfig
		mangr.UpdateConfig()
		return c.JSON(200, newConfig)
	}
}
