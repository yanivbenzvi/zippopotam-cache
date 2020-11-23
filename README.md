<h1 align="center">zippopotam cache</h1>

This project contain a web app for searching places around zip code using Zippoptam API.
Every request is cache the result from zippopotam API.

### 🏠 [Zippopotam Homepage](http://www.zippopotam.us/)

Project contain 3 server:
- Backend  - RESTful API (at port 5000)
- Frontend - Reactive UI using VueJS (at port 7070)
- Database - MySQL

Project using the following technology:
- VueJS
- ExpressJS
- Sequelize ORM for MySQL

## requirements
- [Docker](https://www.docker.com/get-started)

## Testing
In order to run project server-side testing change directory to server path and run the following command:

Unit Test:
```sh
npm run test:unit
```

## Docs
In order to view project server-side API docs run:
```sh
npm run docs
```

## Usage
In order to run project use the following command in the root diractory of this repo:
```sh
docker-compose up
```

## Author

👤 **Yaniv Ben Zvi**

* Github: [@yanivbenzvi](https://github.com/yanivbenzvi)

