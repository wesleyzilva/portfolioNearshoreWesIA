# Wesley's Full-Stack Portfolio Project (PaginaAngular)

This project is a technical portfolio designed to showcase Wesley's skills and knowledge in full-stack cloud development. It features a responsive frontend built with Angular and a robust backend powered by Java, demonstrating a complete, end-to-end application architecture.

## Project Objective

The primary goal of this repository is to serve as a live demonstration of full-stack development capabilities, covering everything from the user interface to database persistence.

### Frontend

The user interface was initially a static page built with simple HTML and CSS. It has been completely refactored into a dynamic and modern single-page application (SPA) using the **Angular** framework. This conversion highlights the ability to modernize legacy web pages and build scalable frontend solutions.

### Backend

The frontend communicates with a backend system built entirely in **Java**. The backend architecture is designed with clear separation of concerns and includes:

*   **Facade Layer**: A Facade design pattern is used as the primary entry point for the frontend, simplifying communication and decoupling the client from the complex internal logic.
*   **Service/Intermediate Layer**: This layer contains the core business logic of the application.
*   **Persistence Layer**: Responsible for all database interactions, connecting to a **PostgreSQL** database to store and retrieve data.

This multi-layered Java backend demonstrates a solid understanding of enterprise application design and database connectivity.

---

## Angular Project Information

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.2.2.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
