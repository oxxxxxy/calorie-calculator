project is in progress... loading...

# Calorie Calculator

This is the over-complicated, production-ready( i hope ) app that can do a little.

# app main features

- help/manual/command list or how to use it thing

- CRUD user foods
- CRUD user dishes
- Read project fooddishes
- full-text search for PUfooddishes

- CRUD day bjuk/pfcc limit and set day

- add PUfooddishes to day bjuk/pfcc limit from FTS result query
- show eaten PUfooddishes today or in some special day by date
- remove eaten today PUfooddishes or from any other day
    - show list of some day bjuk/pfcc limits and its results

- CRUD schelude chain of day bjuk/pfcc limits and set one of it
    - show list of some schelude chains and its results

- sharing Ufooddishes with other users
	- via some message thing for tgbot
	- via link for webapp

- sync user accounts from other clients( tgbot, webapp ) of the same person
- sync Ufooddishes of one user with another user for FTS adding to eaten
    - via some confirming message thing for tg
    - via confirming link for webapp

- user settings
	- set time
	- set language

- set notifications
    - notify to eat via some time ( timer ) after last passed eaten fooddish
    - notify to eat at every some time( schelude )

# app main structure

- internal api service ( InApiS ) that is a core of calorie calculator.
    - almost all app features responsibility
    - client-service access for work via GraphQL, REST, gRPC, websocket
        - auth
- almost cli telegram bot as client-service for work with InApiS
    - help feature
    - multilang responsibility
- web-clients with its own server as client-service for work with InApiS
    - help feature
    - multilang responsibility

# deploy structure

this can be made as couples of InApiS and tgbot, InApiS and web-client( Vue or React, or Flutter, or all in one )
OR as all services in one
OR as single service parts on different machines

# used tech stack

- application dev part
    - JavaScript/TypeScript
    - Nest.js
        - GraphQL with Apollo
        - REST by openAPI
        - typeORM
        - websocket
    - gRPC
    - JSON-RPC
    - passport
    - meilisearch.js
    - pg
    - telegraf
    - Vue
    - React

- application test part
    - Jest
    - tap

- application log part
    - pino


- db part
    - PostgreSQL
    - MeiliSearch

- deploy part
    - nginx
    - docker
    - bash-scripting

# used system design patterns, programming paradigms and other theoretical things, materials, code repos and etc

- official and related docs, tutorials, guides, etc for all the used tech things of course
- Domain-Driven Design
- Object-Oriented Programming
- Functional Programming
- CQRS
- [Nest.js code samples](https://github.com/nestjs/nest/)
- [goldbergyoni's nodebestpractices](https://github.com/goldbergyoni/nodebestpractices)
- [goldbergyoni's javascript-testing-best-practices](https://github.com/goldbergyoni/javascript-testing-best-practices)
- [Sairyss's backend-best-practices](https://github.com/Sairyss/backend-best-practices)
- [Sairyss's system-design-patterns](https://github.com/Sairyss/system-design-patterns)
- [Sairyss's domain-driven-hexagon](https://github.com/Sairyss/domain-driven-hexagon)
- [bitloops's ddd-hexagonal-cqrs-es-eda](https://github.com/bitloops/ddd-hexagonal-cqrs-es-eda)
- [bitloops learning](https://bitloops.com/docs/bitloops-language/category/learning)


