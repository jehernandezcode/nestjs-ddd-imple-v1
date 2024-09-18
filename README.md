<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

This repository is a proof of concept in the implementation of a DDD architecture and the adoption of hexagonal use cases. In addition to other good practices to achieve quality software.

Backend system for a movie reservation service. The service will allow users to sign up, log in, browse movies, reserve seats for specific showtimes, and manage their reservations. The system will feature user authentication, movie and showtime management, seat reservation functionality, and reporting on reservations.

## Current Project Structure

```plaintext
src
|   app.controller.spec.ts
|   app.controller.ts
|   app.module.ts
|   app.service.ts
|   config.ts
|   environments.ts
|   estructura.txt
|   main.ts
|   
+---auth
|   |   auth.module.ts
|   |   
|   +---application
|   |   +---dto
|   |   |       login.dto.ts
|   |   |       refresh-token.dto.ts
|   |   |       
|   |   +---interfaces
|   |   |       IGet-user-id-token-auth-use-case.ts
|   |   |       Ilogin-auth-use-case.ts
|   |   |       IRefresh-token-auth-use-case.ts
|   |   |       IValidate-token-auth-use-case.ts
|   |   |       
|   |   \---use-cases
|   |           get-user-id-token-auth.use-case.ts
|   |           login-auth.use-case.ts
|   |           refresh-token-auth.use.case.ts
|   |           validate-token-auth.use.case.ts
|   |           
|   +---domain
|   |   |   auth-response.ts
|   |   |   
|   |   +---interface
|   |   |       IAuthStrategy.ts
|   |   |       
|   |   \---services
|   |           auth.service.ts
|   |           
|   \---infraestructure
|       +---controllers
|       |       auth.controller.ts
|       |       
|       \---strategies
|               jwt-auth.strategy.ts
|               
+---role
|   |   role.module.ts
|   |   
|   +---application
|   |   +---dto
|   |   |       role-dto.request.ts
|   |   |       
|   |   +---interfaces
|   |   |       Icreate-role-case.ts
|   |   |       Idelete-by-id-role-case.ts
|   |   |       Ifind-by-id-role-case.ts
|   |   |       
|   |   \---use-cases
|   |           create-role.use-case.ts
|   |           delete-by-id-role.use-case.ts
|   |           find-by-id-role.use-case.ts
|   |           
|   +---domain
|   |   |   role.model.ts
|   |   |   role.repository.ts
|   |   |   role.service.ts
|   |   |   
|   |   \---interface
|   |           IRoleService.ts
|   |           
|   \---infraestructure
|       +---controllers
|       |       role.controller.ts
|       |       
|       \---database
|           +---entities
|           |       role.entity.ts
|           |       
|           \---repositories
|                   typeorm.role.repository.ts
|                   
+---shared
|   +---bcrypt
|   |       bcryptHash.service.ts
|   |       
|   +---database
|   |   +---migrations
|   |   \---typeorm
|   |       |   configDB.ts
|   |       |   type-orm.config.ts
|   |       |   typeorm.module.ts
|   |       |   
|   |       \---validations
|   |               validations.ts
|   |               
|   \---enums
|           EnumRole.ts
|           
\---user
    |   user.module.ts
    |   
    +---application
    |   +---dto
    |   |       user-dto.request.ts
    |   |       
    |   +---interfaces
    |   |       Icreate-user-use-case.ts
    |   |       Idelete-user-case.ts
    |   |       Ifind-user-by-id-use-case.ts
    |   |       Iupdate-user-case.ts
    |   |       
    |   \---use-cases
    |           create-user.use-case.ts
    |           delete-user-by-id.use-case.ts
    |           find-user-by-id.use-case.ts
    |           update-user-by-id.use-case.ts
    |           
    +---domain
    |   |   user.model.ts
    |   |   
    |   +---interface
    |   |       IUserService.ts
    |   |       user.repository.ts
    |   |       
    |   \---services
    |           user.service.ts
    |           
    \---infraestructure
        +---controllers
        |       user.controller.ts
        |       
        \---database
            \---typeorm
                +---enties
                |       user.entity.ts
                |       
                \---repositories
                        typeorm-user.repository.ts

```

## Tech Stack

**Client:** Http (Chrome, Edge, ...), Postman

**Server:** Node, NestJs

**Cloud:** AWS (Ec2)

**Repository:** Github

**CI/CD:** Github Actions

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development mode
$ npm run start:dev

# stag mode
$ npm run start:stag

# production mode
$ npm run start:prod
```

## generate migrations

Important: Run npm run build previus migrations scripts

```bash
# development
$ npm run migration:generate:dev ./src/shared/database/migrations/your_migration

# watch mode
$ npm run migration:generate:stag ./src/shared/database/migrations your_migration

# production mode
$ npm run migration:generate:prod ./src/shared/database/migrations/your_migration
```

## Running migrations

```bash
# development
$ npm run migration:run:dev

# watch mode
$ npm run migration:run:stag

# production mode
$ npm run migration:run:prod
```

## Revert migrations

```bash
# development
$ npm run migration:revert:dev

# watch mode
$ npm run migration:revert:stag

# production mode
$ npm run migration:revert:prod
```

## Running the docker container

```bash
# environments variables by .env
$ docker-compose up --build -d
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
