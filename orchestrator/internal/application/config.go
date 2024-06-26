package application

import (
	"github.com/BlackfireZZZ/GoCalculator/orchestrator/pkg/rabbit"
	agentproto "github.com/BlackfireZZZ/GoCalculator/proto"
	"time"
)

type Config struct {
	Port             int
	CalculatorConfig *agentproto.Config
	RabbitConfig     *rabbit.Config
}

func NewConfig() *Config {
	defaultTime := int64(time.Millisecond * 1)
	return &Config{
		Port: 8080,
		CalculatorConfig: &agentproto.Config{
			AddExecutionTime: defaultTime,
			SubExecutionTime: defaultTime,
			MulExecutionTime: defaultTime,
			DivExecutionTime: defaultTime,
		},
		RabbitConfig: rabbit.NewConfigFromEnv(),
	}
}
