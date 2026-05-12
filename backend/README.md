# Backend Server Documentation

This backend is a Bun + Express API server.

## Install Dependencies

```sh
bun install
```

## Run the Server

```sh
bun run server.ts
```

Server default URL:

```txt
http://localhost:8080
```

## API Endpoints

### GET /api/hello

Returns a simple JSON response.

Example response:

```json
{
	"message": "Hello from Bun + Express!"
}
```

Quick test with curl:

```sh
curl http://localhost:8080/api/hello
```

## Middleware Enabled

- `cors()` allows frontend requests from different origins (for local development this includes Vite on port 5173).
- `express.json()` enables JSON request body parsing.

## Link to Frontend

Once the server is running on port 8080, your frontend can call:

```txt
http://localhost:8080/api/hello
```

For a cleaner frontend setup, you can configure a Vite proxy and call `/api/hello` instead of the full URL. See the root README for full steps.
