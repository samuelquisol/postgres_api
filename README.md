# Video-Games and Phrases Search API - v1

This API provides advanced capabilities for searching and managing phrases and video games. It utilizes NestJS and TypeORM with PostgreSQL to offer a robust and scalable backend.

## Demo

Interact with the API using the following URL:

[Go to API](#)

To log in as an admin, you can use the following credentials:

```json
{
  "email": "admin@admin.com",
  "password": "adminpassword"
}
```

## Features

- **Phrase Search:** Allows searching for phrases using ILike functionality, with support for pagination and sorting.
- **Video Game Management:** Provides endpoints for CRUD (Create, Read, Update, Delete) operations on video games.
- **API Documentation:** Swagger UI for documenting and testing the API.
- **Global Exception Handling:** Global exception filtering for uniform error handling.

## Technologies Used

- NestJS: Progressive Node.js framework.
- TypeORM: ORM for interacting with PostgreSQL.
- Swagger: For API documentation.
- PostgreSQL: Relational database.
- Jest: For unit and integration testing.
- TypeScript: For code development.

## Dependencies

This project utilizes the following libraries and frameworks:

- NestJS: `@nestjs/common`, `@nestjs/core`, `@nestjs/platform-express`, `@nestjs/typeorm`, `@nestjs/swagger`
- Validation: `class-validator`
- Database: `pg`, `typeorm`
- Reactive Programming: `rxjs`
- Documentation: `swagger-ui-express`
- Development: `@nestjs/cli`, `@nestjs/schematics`, `@nestjs/testing`, `@types/express`, `@types/jest`, `@types/node`, `@types/supertest`, `@typescript-eslint/eslint-plugin`, `@typescript-eslint/parser`, `eslint`, `eslint-config-prettier`, `eslint-plugin-prettier`, `jest`, `prettier`, `source-map-support`, `supertest`, `ts-jest`, `ts-loader`, `ts-node`, `tsconfig-paths`, `typescript`

## Local Setup
To run the project locally, clone the repository and set up the necessary environment variables for the database and other configurations.

### Clone the repository:
```bash
git clone https://github.com/your-username/postgres_api.git
cd postgres_api
```

### Install the necessary dependencies:
```bash
npm install
```
### Configure the environment variables:
Create a `.env` file in the root of the project and add the following variables:

```.env
  PORT=3000
  DB_HOST=your_database_host
  DB_PORT=5432
  DB_USERNAME=your_database_username
  DB_PASSWORD=your_database_password
  DB_DATABASE=your_database_name
```

## Development Commands

To start the server in development mode, use:
bash
Copiar código
npm run start:dev

## Production Deployment

To start the server in production, use:
bash
Copiar código
npm run build
npm start

## Project Folder Structure

The organization of source code within the `src` folder includes:

- **`/common/filters`:** Contains global exception filters.
  - `http-exception.filter.ts`: Filter for handling HTTP exceptions.
- **`/modules`:** Contains the main application modules.
  - **`/phrases`:** Module for managing phrases.
    - **`/entities`:** Entities related to phrases.
      - `phrase.entity.ts`: Phrase entity.
    - `phrases.controller.ts`: Phrases controller.
    - `phrases.module.ts`: Phrases module.
    - `phrases.service.ts`: Phrase service.
  - **`/video-games`:** Module for managing video games.
    - **`/dto`:** Data Transfer Objects for video games.
      - `create-video-game.dto.ts`: DTO for creating a video game.
      - `update-video-game.dto.ts`: DTO for updating a video game.
    - **`/entities`:** Entities related to video games.
      - `video-game.entity.ts`: Video game entity.
    - `video-games.controller.ts`: Video games controller.
    - `video-games.module.ts`: Video games module.
    - `video-games.service.ts`: Video game service.
- **`app.module.ts`:** Main application module.
- **`main.ts`:** Entry point of the application.

## Gitflow Branching Strategy

This project implements the Gitflow branching strategy:

- **`main`:** Contains production code.
- **`dev`:** Development branch where new features are integrated.
- **`feat/*`:** Branches for new features.
- **`fix/*`:** Branches for bug fixes.

To contribute, create a branch from `dev` following the appropriate prefix (`feat/` or `fix/`) depending on the type of work. Then, create a Pull Request towards `dev`.

## Exception Filter Configuration

**HttpExceptionFilter:**

- Captures all exceptions thrown in the application.
- Determines the HTTP status of the exception, if it is an instance of HttpException.
- Returns a JSON response with the status code, timestamp, endpoint URL, and error message.

## Entities

**Phrase:**

- Represents a phrase entity with fields such as id, text, createdAt, and updatedAt.

## Controllers and Services

**Phrases Controller:**

- Handles HTTP requests related to phrases.
- Defines a GET endpoint for searching phrases.
- Uses `@ApiOperation`, `@ApiResponse`, and `@ApiQuery` to document and validate endpoint parameters.
- Calls the search method of `PhrasesService` with provided search, ordering, and pagination parameters.

## Logic Explanation

**PhrasesService.search Method:**

- Performs a search for phrases based on a provided search term.
- Utilizes the ILike operator for flexible search (case-insensitive).
- Supports sorting of results by any specified field.
- Supports pagination, allowing specification of page and results per page.
- Returns an object containing phrase data, total results, current page, and last page.

## Potential Errors or Vulnerabilities Analysis

- **Input Parameter Validation in PhrasesController:** Validates input parameters in the controller using Swagger decorators, helping to prevent incorrect inputs and potential vulnerabilities.
- **Global Error Handling in HttpExceptionFilter:** The exception filter ensures that all errors are handled uniformly and return responses with consistent formatting, preventing exposure of internal details to end-users.
- **Flexible Search with ILike:** Using ILike for flexible searches can impact performance on large databases. It's important to consider indexing on search fields to optimize performance.
- **Database Connection Configuration:** Database configuration includes security options like `ssl: true`, but it must ensure that database credentials are not accidentally exposed in the repository.

## Internal Code Optimization Explanation

- **Consolidation of Logic in PhrasesService.search:** The logic for search, ordering, and pagination is handled in a single method in `PhrasesService`. This centralizes data access logic and facilitates maintenance.
- **Separation of Business Logic and Controller:** The search logic is kept in the service (`PhrasesService`), while the controller (`PhrasesController`) only handles HTTP requests and calls the service. This follows the principle of separation of concerns.
- **Use of Decorators for Documentation and Validation:** Swagger decorators (`@ApiOperation`, `@ApiResponse`, `@ApiQuery`) are used to automatically document and validate endpoints, improving code clarity and self-documentation.
- **Centralized Exception Handling:** The use of the exception filter (`HttpExceptionFilter`) centralizes error handling, providing more consistent error management and simplifying code in controllers and services.

**Enjoy using Postgres API as much as I enjoyed developing it!**

Best regards,  
Samuel Quintero Solís  
samuelquisol@gmail.com
