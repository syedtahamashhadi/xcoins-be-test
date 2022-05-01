<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project Description

I have used the Nest js frame work, which is built on top of express and follow the same same architectural block of Angular.

### Following are some findings and changes which i have done from the given code

1) Refactoring the code into respective module (Favourite,Profile,Simulator)
2) Adding Interfaces for the schema and function perameter
3) Adding DTO for the incoming requests, which help to validate and form the values before performing any     operation on the request by using "class-validator"
4) Removing the repatitve endpoints, by adding optional perameter i.e(/api/favourite/:profile_id? , /api/simulator/:profile_id?)
5) Adding appropiate Decorators and thier respective types
6) Setting up the configuration in approriate manner
8) Adding rate-limiter globally, which is an essential part in production application because it helps against the brute-force attack
9) Passing the correct cors policy and it's options
10) Using .env file to pass sensative values into the code

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
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

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
