package calculator

import "time"

func (c *Calculator) calc(operation string, a, b float64) (float64, error) {
	switch operation {
	case "+":
		time.Sleep(time.Duration(c.Config.AddExecutionTime))
		return a + b, nil
	case "-":
		time.Sleep(time.Duration(c.Config.SubExecutionTime))
		return a - b, nil
	case "*":
		time.Sleep(time.Duration(c.Config.MulExecutionTime))
		return a * b, nil
	case "/":
		time.Sleep(time.Duration(c.Config.DivExecutionTime))
		if b == 0 {
			return 0, ErrDivisionByZero
		}
		return a / b, nil
	default:
		return 0, ErrInvalidOperation
	}
}
