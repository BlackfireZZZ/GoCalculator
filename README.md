# Go Calculator

## Installation

You can use [Postman](https://elements.getpostman.com/redirect?entityId=31283519-ce5c1d63-8bc0-4afc-9d88-c30f09862afc&entityType=collection) to test the project)

1. Rename all files in env folder from `env.service_name.example` to `.env.service_name`
2. Run `docker-compose up -d`
3. Run `go run orchestrator/cmd/main.go`
4. Run `go run agent/cmd/main.go 10000`
5. Open `http://localhost` in your browser
6. Check docs at `http://localhost/api/docs`
7. Enjoy!
8. Turn off the server with `docker-compose down`

## Structure

<div>
    <details>
        <summary>Project structure</summary>
        <img src="docs/pict/project_schema.png">
    </details>
    <details>
        <summary>DB structure</summary>
        <img src="docs/pict/db_schema.png">
    </details>
    <details>
        <summary>Go packages structure</summary>
        <img src="docs/pict/depend_graph.png">
    </details>
</div>

### Technologies

#### Backend

- Golang
- Echo
- Docker
- Docker-compose
- PostgreSQL
- Nginx
- Swagger

#### Frontend

- React
- JavaScript
- HTML
- CSS

## Contributing

### Contact me

- [Telegram](https://t.me/Blackfire112358))
