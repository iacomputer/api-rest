# API REST

## Description

This is an API REST built with Fastify.

## Prerequisites

- Docker 27.5.1
- Node 23.8.0

## Run

To build and run the application using Docker Compose, use the following command:

```sh
docker-compose up --build
```

## Test

To run the tests, use the following command:

```sh
npm test
```

## Environment Variables

Make sure to set the following environment variables:

- `NODE_ENV`: The name of the environment where it is running.
- `PORT`: The port on which the server will run (default: 3000).

## General considerations

- If you are developing and you modify a locales/\*.json language file, you will have to modify a .ts file to load the change.

## Generate ssl certificates

```
mkdir certs
cd certs
openssl genrsa -out key.pem 2048
openssl req -new -key key.pem -out csr.pem
openssl x509 -req -days 365 -in csr.pem -signkey key.pem -out cert.pem
```

## To-Do

Next tasks:

- [x] Debug
- [x] Coverage
- [x] i18next
- [x] Version change automatically after committing
- [x] https
- [] Compress
- [] Cors
- [] Rate limit
- [] Site static
- [] Errors manager see fastify-sensible
- [] Security see fastify-helmet
- [] Compare the project with io.voicefied
- [] Simple CRUD

## License

This project is licensed under the MIT License.
